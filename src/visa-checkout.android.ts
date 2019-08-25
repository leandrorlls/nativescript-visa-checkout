import { android as appAndroid } from "tns-core-modules/application";

import {
    NSVisaCheckoutButton as NSVisaCheckoutButtonBase,
    VisaCheckoutPaymentResultEventData,
    VisaCheckoutPaymentResultStatus,
    VisaCheckoutConfig
} from "./visa-checkout.common";

declare var com;

export class NSVisaCheckoutButton extends NSVisaCheckoutButtonBase {
    constructor(config: VisaCheckoutConfig) {
        super(config);
    }
    
    createNativeView() {
        return new com.visa.checkout.CheckoutButton(appAndroid.currentContext);
    }

    initNativeView() {
        super.initNativeView();
        this._initVco();
    }

    private _initVco(): void {
        const resultListener = new com.visa.checkout.VisaCheckoutSdk.VisaCheckoutResultListener({});
        resultListener.onButtonClick = (launchReadyHandler: any) => launchReadyHandler.launch();
        resultListener.onResult = (visaPaymentSummary: any) => this.resultHandler(visaPaymentSummary);

        const environment = this._isLive ? com.visa.checkout.Environment.PRODUCTION : com.visa.checkout.Environment.SANDBOX;
        const profile = new com.visa.checkout.Profile.ProfileBuilder(this._apiKey, environment)
            .setProfileName(this._profileName)
            .setDisplayName(this._displayName)
            .build();

        const currency = this._currency === "EUR" ? com.visa.checkout.PurchaseInfo.Currency.EUR : com.visa.checkout.PurchaseInfo.Currency.GBP;
        const purchaseInfo = new com.visa.checkout.PurchaseInfo.PurchaseInfoBuilder(new java.math.BigDecimal(this._total), currency)
            .setShippingAddressRequired(false)
            .setThreeDSSetup(false, false)
            .setSubTotal(new java.math.BigDecimal(this._total))
            .setUserReviewAction(com.visa.checkout.PurchaseInfo.UserReviewAction.PAY)
            .build();

        this.nativeView.init(appAndroid.currentContext, profile, purchaseInfo, resultListener);
    }

    private resultHandler(result: any): void {
        let status: VisaCheckoutPaymentResultStatus;

        switch (result.getStatusName()) {
            case com.visa.checkout.VisaPaymentSummary.PAYMENT_CANCEL: status = VisaCheckoutPaymentResultStatus.Cancel; break;
            case com.visa.checkout.VisaPaymentSummary.PAYMENT_SUCCESS: status = VisaCheckoutPaymentResultStatus.Success; break;
            default: status = VisaCheckoutPaymentResultStatus.Error; break;
        }

        this.notify(<VisaCheckoutPaymentResultEventData>{
            object: this,
            eventName: NSVisaCheckoutButton.PaymentResultEvent,
            status: status,
            callId: result.getCallId()
        });
    }
}