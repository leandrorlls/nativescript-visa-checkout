import { View, EventData } from "tns-core-modules/ui/core/view";

export enum VisaCheckoutPaymentStatus {
  Success = "payment.success",
  Cancel = "payment.cancel",
  Error = "payment.error",
  Failure = "payment.failure"
};

export enum VisaCheckoutEnvironment {
  SANDBOX = "https://sandbox.secure.checkout.visa.com",
  PRODUCTION = "https://secure.checkout.visa.com"
}

export enum VisaCheckoutCurrency {
  GBP = "GBP",
  EUR = "EUR"
}

export interface VisaCheckoutPaymentEventData extends EventData { status: VisaCheckoutPaymentStatus, callId: string };

export class VisaCheckout extends View {
  public static paymentEvent: string = "payment";

  constructor() {
    super();

  }
}