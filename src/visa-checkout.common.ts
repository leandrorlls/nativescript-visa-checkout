import { EventData, View } from "tns-core-modules/ui/core/view";

export enum VisaCheckoutPaymentResultStatus {
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

export class NSVisaCheckoutButton extends View {
  protected _isLive: boolean;
  protected _apiKey: string;
  protected _profileName: string
  protected _displayName: string
  protected _total: number;
  protected _currency: string;
  public static PaymentResultEvent: string = "paymentResult";

  constructor(config: VisaCheckoutConfig) {
    super();

    this._isLive = config.isLive;
    this._currency = config.currency.toUpperCase();
    this._apiKey = config.apiKey;
    this._profileName = config.profileName;
    this._displayName = config.displayName;
    this._total = config.total;
  }
}