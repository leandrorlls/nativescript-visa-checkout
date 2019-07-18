import { android as appAndroid } from "tns-core-modules/application";

import {
    VisaCheckout as VisaCheckoutBase,
    VisaCheckoutEnvironment,
    VisaCheckoutCurrency,
    VisaCheckoutPaymentResultStatus,
    VisaCheckoutPaymentResultEventData,
    VisaCheckoutConfig
} from './visa-checkout.common';

export class VisaCheckout extends VisaCheckoutBase {
    constructor(config: VisaCheckoutConfig) {
        super(config);
    }

    createNativeView(): com.visa.checkout.CheckoutButton {
        return new com.visa.checkout.CheckoutButton(appAndroid.currentContext);
    }

    initNativeView() {
        super.initNativeView();
        this._initVco();
    }

    private _initVco(): void {
        try {
            const resultListener = new com.visa.checkout.VisaCheckoutSdk.VisaCheckoutResultListener({});

            resultListener.onButtonClick = (launchReadyHandler: com.visa.checkout.VisaCheckoutSdk.VisaCheckoutResultListener.LaunchReadyHandler) => {
                launchReadyHandler.launch();
            };

            resultListener.onResult = (visaPaymentSummary: com.visa.checkout.VisaPaymentSummary) => {
                let status: VisaCheckoutPaymentResultStatus;

                switch (visaPaymentSummary.getStatusName()) {
                    case com.visa.checkout.VisaPaymentSummary.PAYMENT_SUCCESS: status = VisaCheckoutPaymentResultStatus.Success; break;
                    case com.visa.checkout.VisaPaymentSummary.PAYMENT_CANCEL: status = VisaCheckoutPaymentResultStatus.Cancel; break;
                    case com.visa.checkout.VisaPaymentSummary.PAYMENT_ERROR: status = VisaCheckoutPaymentResultStatus.Error; break;
                    case com.visa.checkout.VisaPaymentSummary.PAYMENT_FAILURE: status = VisaCheckoutPaymentResultStatus.Failure; break;
                }

                this.notify(<VisaCheckoutPaymentResultEventData>{ object: this, eventName: VisaCheckout.paymentResultEvent, status: status, callId: visaPaymentSummary.getCallId() });
            };

            const profile = this._getProfile();
            const purchaseInfo = this._getPurchaseInfo();
            this.android.init(appAndroid.currentContext, profile, purchaseInfo, resultListener);
        } catch (error) {
            console.error("Error attempting to initialize visa checkout.", error);
        }
    }

    private _getProfile(): com.visa.checkout.Profile {
        return new com.visa.checkout.Profile.ProfileBuilder(
            this._apiKey,
            this._environment == VisaCheckoutEnvironment.Sandbox
                ? com.visa.checkout.Environment.SANDBOX
                : com.visa.checkout.Environment.PRODUCTION)
            .setProfileName(this._profileName)
            .setDataLevel(com.visa.checkout.Profile.DataLevel.NONE)
            .setCountryCode(com.visa.checkout.Profile.Country.GB)
            .build();
    }

    private _getPurchaseInfo(): com.visa.checkout.PurchaseInfo {
        const currency = this._getCurrencyFrom(this._currency);
        const purchaseInfo = new com.visa.checkout.PurchaseInfo.PurchaseInfoBuilder(new java.math.BigDecimal(this._total), currency);
        return purchaseInfo.build();
    }

    private _getCurrencyFrom(currency: VisaCheckoutCurrency): com.visa.checkout.PurchaseInfo.Currency {
        switch (currency) {
            case VisaCheckoutCurrency.USD: return com.visa.checkout.PurchaseInfo.Currency.USD;
            case VisaCheckoutCurrency.AUD: return com.visa.checkout.PurchaseInfo.Currency.AUD;
            case VisaCheckoutCurrency.BRL: return com.visa.checkout.PurchaseInfo.Currency.BRL;
            case VisaCheckoutCurrency.CAD: return com.visa.checkout.PurchaseInfo.Currency.CAD;
            case VisaCheckoutCurrency.CNY: return com.visa.checkout.PurchaseInfo.Currency.CNY;
            case VisaCheckoutCurrency.CLP: return com.visa.checkout.PurchaseInfo.Currency.CLP;
            case VisaCheckoutCurrency.COP: return com.visa.checkout.PurchaseInfo.Currency.COP;
            case VisaCheckoutCurrency.HKD: return com.visa.checkout.PurchaseInfo.Currency.HKD;
            case VisaCheckoutCurrency.MYR: return com.visa.checkout.PurchaseInfo.Currency.MYR;
            case VisaCheckoutCurrency.MXN: return com.visa.checkout.PurchaseInfo.Currency.MXN;
            case VisaCheckoutCurrency.NZD: return com.visa.checkout.PurchaseInfo.Currency.NZD;
            case VisaCheckoutCurrency.PEN: return com.visa.checkout.PurchaseInfo.Currency.PEN;
            case VisaCheckoutCurrency.SGD: return com.visa.checkout.PurchaseInfo.Currency.SGD;
            case VisaCheckoutCurrency.ZAR: return com.visa.checkout.PurchaseInfo.Currency.ZAR;
            case VisaCheckoutCurrency.AED: return com.visa.checkout.PurchaseInfo.Currency.AED;
            case VisaCheckoutCurrency.ARS: return com.visa.checkout.PurchaseInfo.Currency.ARS;
            case VisaCheckoutCurrency.GBP: return com.visa.checkout.PurchaseInfo.Currency.GBP;
            case VisaCheckoutCurrency.EUR: return com.visa.checkout.PurchaseInfo.Currency.EUR;
            case VisaCheckoutCurrency.PLN: return com.visa.checkout.PurchaseInfo.Currency.PLN;
            case VisaCheckoutCurrency.INR: return com.visa.checkout.PurchaseInfo.Currency.INR;
            case VisaCheckoutCurrency.UAH: return com.visa.checkout.PurchaseInfo.Currency.UAH;
            case VisaCheckoutCurrency.SAR: return com.visa.checkout.PurchaseInfo.Currency.SAR;
            case VisaCheckoutCurrency.KWD: return com.visa.checkout.PurchaseInfo.Currency.KWD;
            case VisaCheckoutCurrency.QAR: return com.visa.checkout.PurchaseInfo.Currency.QAR;
            default: return com.visa.checkout.PurchaseInfo.Currency.GBP;
        }
    }
}