import { ios as iosApp } from "tns-core-modules/application";

import {
    VisaCheckout as VisaCheckoutBase,
    VisaCheckoutEnvironment,
    VisaCheckoutCurrency,
    VisaCheckoutPaymentResultStatus,
    VisaCheckoutPaymentResultEventData,
    VisaCheckoutConfig
} from './visa-checkout.common';

export class VisaCheckout extends VisaCheckoutBase {
    private _launchCheckoutHandle: () => void;

    constructor(config: VisaCheckoutConfig) {
        VisaCheckoutSDK.configure();
        super(config);
    }

    createNativeView() {
        return VisaCheckoutButton.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
    }

    initNativeView() {
        super.initNativeView();
        this._initVco();
    }

    private _initVco(): void {
        try {
            const profile = this._getProfile();
            const purchaseInfo = this._getPurchaseInfo();

            this.nativeView.onCheckoutWithProfilePurchaseInfoPresentingViewControllerOnReadyOnButtonTappedCompletion(
                profile,
                purchaseInfo,
                iosApp.rootController,
                (launchHandle) => this._onReady(launchHandle),
                () => this._onButtonTapped(),
                (result: VisaCheckoutResult) => this._onResult(result));
        } catch (error) {
            console.error("Error attempting to initialize visa checkout.", error);
        }
    }

    private _getProfile(): com.visa.checkout.Profile {
        return VisaProfile.alloc().initWithEnvironmentApiKeyProfileName(
            this._environment == VisaCheckoutEnvironment.Sandbox ? VisaEnvironment.Sandbox : VisaEnvironment.Sandbox,
            this._apiKey,
            this._profileName);
    }

    private _getPurchaseInfo(): VisaPurchaseInfo {
        const amount = VisaCurrencyAmount.alloc().initWithDouble(this._total);
        const currency = this._getCurrencyFrom(this._currency);
        return VisaPurchaseInfo.alloc().initWithTotalCurrency(amount, currency);
    }

    private _onReady(launchHandle: () => void) {
        this._launchCheckoutHandle = launchHandle;
    }

    private _onButtonTapped() {
        if (this._launchCheckoutHandle) {
            this._launchCheckoutHandle();
        }
    }

    private _onResult(result: VisaCheckoutResult) {
        let status: VisaCheckoutPaymentResultStatus;

        switch (result.statusCode) {
            case VisaCheckoutResultStatus.StatusInternalError: status = VisaCheckoutPaymentResultStatus.Failure; break;
            case VisaCheckoutResultStatus.StatusNotConfigured: VisaCheckoutPaymentResultStatus.Error; break;
            case VisaCheckoutResultStatus.StatusDuplicateCheckoutAttempt: VisaCheckoutPaymentResultStatus.Error; break;
            case VisaCheckoutResultStatus.StatusUserCancelled: status = VisaCheckoutPaymentResultStatus.Cancel; break;
            case VisaCheckoutResultStatus.StatusSuccess: status = VisaCheckoutPaymentResultStatus.Success; break;
            case VisaCheckoutResultStatus.Default: status = VisaCheckoutPaymentResultStatus.Success; break;
        }

        this.notify(<VisaCheckoutPaymentResultEventData>{ object: this, eventName: VisaCheckout.paymentResultEvent, status: status, callId: result.callId });
    }

    private _getCurrencyFrom(currency: VisaCheckoutCurrency): VisaCurrency {
        switch (currency) {
            case VisaCheckoutCurrency.USD: return VisaCurrency.Usd;
            case VisaCheckoutCurrency.AUD: return VisaCurrency.Aud;
            case VisaCheckoutCurrency.BRL: return VisaCurrency.Brl;
            case VisaCheckoutCurrency.CAD: return VisaCurrency.Cad;
            case VisaCheckoutCurrency.CNY: return VisaCurrency.Cny;
            case VisaCheckoutCurrency.CLP: return VisaCurrency.Clp;
            case VisaCheckoutCurrency.COP: return VisaCurrency.Cop;
            case VisaCheckoutCurrency.HKD: return VisaCurrency.Hkd;
            case VisaCheckoutCurrency.MYR: return VisaCurrency.Myr;
            case VisaCheckoutCurrency.MXN: return VisaCurrency.Mxn;
            case VisaCheckoutCurrency.NZD: return VisaCurrency.Nzd;
            case VisaCheckoutCurrency.PEN: return VisaCurrency.Pen;
            case VisaCheckoutCurrency.SGD: return VisaCurrency.Sgd;
            case VisaCheckoutCurrency.ZAR: return VisaCurrency.Zar;
            case VisaCheckoutCurrency.AED: return VisaCurrency.Aed;
            case VisaCheckoutCurrency.ARS: return VisaCurrency.Ars;
            case VisaCheckoutCurrency.GBP: return VisaCurrency.Gbp;
            case VisaCheckoutCurrency.EUR: return VisaCurrency.Eur;
            case VisaCheckoutCurrency.PLN: return VisaCurrency.Pln;
            case VisaCheckoutCurrency.INR: return VisaCurrency.Inr;
            case VisaCheckoutCurrency.UAH: return VisaCurrency.Uah;
            case VisaCheckoutCurrency.SAR: return VisaCurrency.Sar;
            case VisaCheckoutCurrency.KWD: return VisaCurrency.Kwd;
            case VisaCheckoutCurrency.QAR: return VisaCurrency.Qar;
            default: return VisaCurrency.Gbp;
        }
    }
}