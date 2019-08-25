import { 
    NSVisaCheckoutButton as NSVisaCheckoutButtonBase,
    VisaCheckoutPaymentResultEventData, 
    VisaCheckoutPaymentResultStatus, 
    VisaCheckoutConfig
} from "./visa-checkout.common";

export class NSVisaCheckoutButton extends NSVisaCheckoutButtonBase {
    private launchCheckoutHandle?: () => void;

    constructor(config: VisaCheckoutConfig) {
        super(config);
    }

    createNativeView() {
        return VisaCheckoutButton.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
    }

    initNativeView() {
        super.initNativeView();
        this.initVisaCheckout();
    }

    private initVisaCheckout() {
        const environment = this._isLive ? VisaEnvironment.Production : VisaEnvironment.Sandbox;
        
        const profile = VisaProfile.alloc().initWithEnvironmentApiKeyProfileName(environment, this._apiKey, this._profileName);
        profile.displayName = this._displayName;

        const amount = VisaCurrencyAmount.alloc().initWithDouble(this._total);
        
        const currency = this._currency === "EUR" ? VisaCurrency.Eur : VisaCurrency.Gbp;
        let purchaseInfo = VisaPurchaseInfo.alloc().initWithTotalCurrency(amount, currency);

        this.nativeView.onCheckoutWithProfilePurchaseInfoPresentingViewControllerOnReadyOnButtonTappedCompletion(
            profile,
            purchaseInfo,
            this.page.viewController,
            (launchHandle) => this._onReady(launchHandle),
            () => this.launchVisaCheckout(),
            (result: VisaCheckoutResult) => this.resultHandler(result));
    }

    private _onReady(launchHandle: () => void) {
        this.launchCheckoutHandle = launchHandle;
    }

    private launchVisaCheckout() {
        let launchCheckout = this.launchCheckoutHandle ? this.launchCheckoutHandle : () => { return; }
        launchCheckout();
    }

    private resultHandler(result: any): any {
        let status: VisaCheckoutPaymentResultStatus;

        switch (result.statusCode) {
            case VisaCheckoutResultStatus.StatusUserCancelled: status = VisaCheckoutPaymentResultStatus.Cancel; break;
            case VisaCheckoutResultStatus.StatusSuccess: status = VisaCheckoutPaymentResultStatus.Success; break;
            case VisaCheckoutResultStatus.Default: status = VisaCheckoutPaymentResultStatus.Success; break;
            default: status = VisaCheckoutPaymentResultStatus.Error; break;
        }

        this.notify(<VisaCheckoutPaymentResultEventData>{
            object: this,
            eventName: NSVisaCheckoutButton.PaymentResultEvent,
            status: status,
            callId: result.callId
        });

        return result;
    }
}