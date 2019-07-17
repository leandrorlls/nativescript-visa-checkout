declare namespace com {
    namespace visa {
        namespace checkout {
            class Profile { }
            class PurchaseInfo { }
            class CheckoutButton {
                constructor(context: any) { }
                init(activity: any, profile: com.visa.checkout.Profile, purchaseInfo: com.visa.checkout.PurchaseInfo, visaCheckoutResultListener: com.visa.checkout.VisaCheckoutSdk.VisaCheckoutResultListener);
            }
            class VisaCheckoutSdk { }
            class VisaPaymentSummary {
                static PAYMENT_SUCCESS = "payment.success";
                static PAYMENT_CANCEL = "payment.cancel";
                static PAYMENT_ERROR = "payment.error";
                static PAYMENT_FAILURE = "payment.failure";
                getStatusName(): string;
                getCallId(): string;
            }
        }
    }
}

declare namespace com {
    namespace visa {
        namespace checkout {
            namespace Profile {
                class ProfileBuilder {
                    constructor(var1: string, var2: string) { }
                    setProfileName(var1: string);
                }
            }
            namespace PurchaseInfo {
                class PurchaseInfoBuilder {
                    constructor(value: java.math.BigDecimal, currency: string) { }
                    setPrefillRequest(var1: Function);
                    build();
                }
            }
            namespace VisaCheckoutSdk {
                class VisaCheckoutResultListener {
                    constructor(arg: any) { }
                    onResult(visaPaymentSummary: com.visa.checkout.VisaPaymentSummary): void;
                    onButtonClick(launchReadyHandler: com.visa.checkout.VisaCheckoutSdk.VisaCheckoutResultListener.LaunchReadyHandler): void;
                }
            }
        }
    }
}

declare namespace com {
    namespace visa {
        namespace checkout {
            namespace VisaCheckoutSdk {
                namespace VisaCheckoutResultListener {
                    class LaunchReadyHandler {
                        launch(): void;
                    }
                }
            }
        }
    }
}

declare namespace com {
    namespace visa {
        namespace checkout {
            namespace Profile {
                enum DataLevel {
                    SUMMARY = "SUMMARY",
                    FULL = "FULL",
                    NONE = "NONE"
                }
                enum Country {
                    GB = "GB",
                    IE = "IE"
                }
            }
            namespace PurchaseInfo {
                enum Currency {
                    GBP = "GBP",
                    EUR = "EUR"
                }
            }
        }
    }
}