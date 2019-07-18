import { View, EventData, isIOS } from "tns-core-modules/ui/core/view";

export enum VisaCheckoutEnvironment {
  Sandbox,
  Production
}

export enum VisaCheckoutPaymentResultStatus {
  Success,
  Cancel,
  Error,
  Failure
}

export enum VisaCheckoutCurrency {
  USD,
  AUD,
  BRL,
  CAD,
  CNY,
  CLP,
  COP,
  HKD,
  MYR,
  MXN,
  NZD,
  PEN,
  SGD,
  ZAR,
  AED,
  ARS,
  GBP,
  EUR,
  PLN,
  INR,
  UAH,
  SAR,
  KWD,
  QAR
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

export class VisaCheckout extends View {
  protected _environment: VisaCheckoutEnvironment;
  protected _apiKey: string;
  protected _profileName: string
  protected _total: number;
  protected _currency: VisaCheckoutCurrency;
  public static paymentResultEvent: string = "paymentResult";

  constructor(config: VisaCheckoutConfig) {
    super();

    this._environment = !!config.environment && config.environment.toLowerCase() === "production"
      ? VisaCheckoutEnvironment.Production
      : VisaCheckoutEnvironment.Sandbox;

    this._currency = !!config.currency && config.currency.toLowerCase() === "eur"
      ? VisaCheckoutCurrency.EUR
      : VisaCheckoutCurrency.GBP;

    this._apiKey = config.apiKey;
    this._profileName = config.profileName;
    this._total = config.total;
  }
}