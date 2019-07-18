import { View, EventData } from "tns-core-modules/ui/core/view";
export declare enum VisaCheckoutEnvironment {
    Sandbox = 0,
    Production = 1
}
export declare enum VisaCheckoutPaymentResultStatus {
    Success = 0,
    Cancel = 1,
    Error = 2,
    Failure = 3
}
export declare enum VisaCheckoutCurrency {
    USD = 0,
    AUD = 1,
    BRL = 2,
    CAD = 3,
    CNY = 4,
    CLP = 5,
    COP = 6,
    HKD = 7,
    MYR = 8,
    MXN = 9,
    NZD = 10,
    PEN = 11,
    SGD = 12,
    ZAR = 13,
    AED = 14,
    ARS = 15,
    GBP = 16,
    EUR = 17,
    PLN = 18,
    INR = 19,
    UAH = 20,
    SAR = 21,
    KWD = 22,
    QAR = 23
}
export interface VisaCheckoutPaymentResultEventData extends EventData {
    status: VisaCheckoutPaymentResultStatus;
    callId: string;
}
export interface VisaCheckoutConfig {
    environment: string;
    apiKey: string;
    profileName: string;
    total: number;
    currency: string;
}
export declare class VisaCheckout extends View {
    static paymentResultEvent: string;
    constructor(config: VisaCheckoutConfig);
}
