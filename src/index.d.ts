import { View, EventData } from "tns-core-modules/ui/core/view";
export declare enum VisaCheckoutPaymentStatus {
    Success = "payment.success",
    Cancel = "payment.cancel",
    Error = "payment.error",
    Failure = "payment.failure"
}
export declare enum VisaCheckoutEnvironment {
    SANDBOX = "https://sandbox.secure.checkout.visa.com",
    PRODUCTION = "https://secure.checkout.visa.com"
}
export declare enum VisaCheckoutCurrency {
    GBP = "GBP",
    EUR = "EUR"
}
export interface VisaCheckoutPaymentEventData extends EventData {
    status: VisaCheckoutPaymentStatus;
    callId: string;
}
export declare class VisaCheckout extends View {
    static paymentEvent: string;
    constructor();
}
