import { EventData, View } from "tns-core-modules/ui/core/view";
export declare enum VisaCheckoutPaymentResultStatus {
    Cancel = "Cancel",
    Error = "Error",
    Success = "Success"
}
export interface VisaCheckoutPaymentResultEventData extends EventData {
    status: VisaCheckoutPaymentResultStatus;
    callId: string;
}
export interface VisaCheckoutConfig {
    isLive: boolean;
    apiKey: string;
    profileName: string;
    displayName: string;
    total: number;
    currency: string;
}
export declare class NSVisaCheckoutButton extends View {
    static PaymentResultEvent: string;
    constructor(config: VisaCheckoutConfig);
}