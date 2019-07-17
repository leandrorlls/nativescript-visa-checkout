import { android as appAndroid } from "tns-core-modules/application";

import { 
    VisaCheckout as VisaCheckoutBase, 
    VisaCheckoutPaymentEventData, 
    VisaCheckoutPaymentStatus, 
    VisaCheckoutEnvironment, 
    VisaCheckoutCurrency
} from './visa-checkout.common';


export class VisaCheckout extends VisaCheckoutBase {
    createNativeView(): com.visa.checkout.CheckoutButton {
        return new com.visa.checkout.CheckoutButton(appAndroid.currentContext);
    }

    public onLoaded(): void {
        super.onLoaded();
        this._initVco();
    }

    private _initVco(): void {
        const resultListener = new com.visa.checkout.VisaCheckoutSdk.VisaCheckoutResultListener({});

        resultListener.onButtonClick = (launchReadyHandler: com.visa.checkout.VisaCheckoutSdk.VisaCheckoutResultListener.LaunchReadyHandler) => {
            launchReadyHandler.launch();
        };

        resultListener.onResult = (visaPaymentSummary: com.visa.checkout.VisaPaymentSummary) => {
            let status: VisaCheckoutPaymentStatus;

            switch (visaPaymentSummary.getStatusName()) {
                case com.visa.checkout.VisaPaymentSummary.PAYMENT_SUCCESS: status = VisaCheckoutPaymentStatus.Success; break;
                case com.visa.checkout.VisaPaymentSummary.PAYMENT_CANCEL: status = VisaCheckoutPaymentStatus.Cancel; break;
                case com.visa.checkout.VisaPaymentSummary.PAYMENT_ERROR: status = VisaCheckoutPaymentStatus.Error; break;
                case com.visa.checkout.VisaPaymentSummary.PAYMENT_FAILURE: status = VisaCheckoutPaymentStatus.Failure; break;
            }

            this.notify(<VisaCheckoutPaymentEventData>{ object: this, eventName: VisaCheckout.paymentEvent, status: status, callId: visaPaymentSummary.getCallId() });
        };

        const profile = this._getProfile();
        const purchaseInfo = this._getPurchaseInfo();
        this.android.init(appAndroid.currentContext, profile, purchaseInfo, resultListener);
    }

    private _getProfile(): com.visa.checkout.Profile {
        return new com.visa.checkout.Profile.ProfileBuilder("YOUR_API_KEY_HERE", VisaCheckoutEnvironment.SANDBOX)
            .setProfileName("YOUR_PROFILE_NAME_HERE")
            .setDataLevel(com.visa.checkout.Profile.DataLevel.FULL)
            .setCountryCode(com.visa.checkout.Profile.Country.GB)
            .build();
    }

    private _getPurchaseInfo(): com.visa.checkout.PurchaseInfo {
        const purchaseInfo = new com.visa.checkout.PurchaseInfo.PurchaseInfoBuilder(new java.math.BigDecimal("10.23"), VisaCheckoutCurrency.GBP);
        return purchaseInfo.build();
    }
}