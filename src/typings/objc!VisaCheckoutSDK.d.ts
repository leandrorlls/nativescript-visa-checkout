
declare class VInitInfo extends NSObject {

	static alloc(): VInitInfo; // inherited from NSObject

	static new(): VInitInfo; // inherited from NSObject

	objectForKeyedSubscript(key: string): any;

	setObjectForKeyedSubscript(obj: any, key: string): void;
}

declare const enum VisaCardBrand {

	Amex = 0,

	Discover = 1,

	Electron = 2,

	Elo = 3,

	Mastercard = 4,

	Visa = 5,

	Invalid = 6
}

declare class VisaCheckoutButton extends UIView {

	static alloc(): VisaCheckoutButton; // inherited from NSObject

	static appearance(): VisaCheckoutButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): VisaCheckoutButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): VisaCheckoutButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): VisaCheckoutButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): VisaCheckoutButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): VisaCheckoutButton; // inherited from UIAppearance

	static miniButtonImage(): UIImage;

	static new(): VisaCheckoutButton; // inherited from NSObject

	enableAnimation: boolean;

	readonly isReady: boolean;

	standardStyle: boolean;

	style: VisaCheckoutButtonStyle;

	onCheckoutWithProfilePurchaseInfoPresentingViewControllerOnReadyOnButtonTappedCompletion(profile: VisaProfile, purchaseInfo: VisaPurchaseInfo, presentingViewController: UIViewController, merchantOnReady: (p1: () => void) => void, onButtonTapped: () => void, completion: (p1: VisaCheckoutResult) => void): void;

	onCheckoutWithPurchaseInfoCompletion(purchaseInfo: VisaPurchaseInfo, completion: (p1: VisaCheckoutResult) => void): void;

	onCheckoutWithTotalCurrencyCompletion(total: VisaCurrencyAmount, currency: VisaCurrency, completion: (p1: VisaCheckoutResult) => void): void;
}

declare const enum VisaCheckoutButtonStyle {

	Neutral = 0,

	Standard = 1
}

declare const enum VisaCheckoutConfigStatus {

	DebugModeNotSupported = 0,

	InternalError = 1,

	InvalidAPIKey = 2,

	InvalidProfileName = 3,

	NetworkFailure = 4,

	NoCommonSupportedOrientations = 5,

	SdkVersionDeprecation = 6,

	Success = 7
}

declare class VisaCheckoutPlugin extends NSObject implements WKScriptMessageHandler {

	static alloc(): VisaCheckoutPlugin; // inherited from NSObject

	static configureViewController(contentController: WKUserContentController, viewController: UIViewController): void;

	static configureWithWebViewViewController(webView: UIWebView, viewController: UIViewController): void;

	static handleRequest(request: NSURLRequest): void;

	static new(): VisaCheckoutPlugin; // inherited from NSObject

	static shouldHandleRequest(request: NSURLRequest): boolean;

	presentingViewController: UIViewController;

	static readonly main: VisaCheckoutPlugin;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void;
}

declare class VisaCheckoutResult extends NSObject {

	static alloc(): VisaCheckoutResult; // inherited from NSObject

	static new(): VisaCheckoutResult; // inherited from NSObject

	readonly callId: string;

	cardBrand: VisaCardBrand;

	country: VisaCountry;

	countryCode: string;

	readonly encryptedKey: string;

	readonly encryptedPaymentData: string;

	readonly lastFourDigits: string;

	readonly paymentMethodType: string;

	readonly postalCode: string;

	readonly statusCode: VisaCheckoutResultStatus;

	readonly statusName: string;

	objectForKeyedSubscript(key: string): any;
}

declare const enum VisaCheckoutResultStatus {

	StatusDuplicateCheckoutAttempt = 0,

	StatusInternalError = 1,

	StatusNotConfigured = 2,

	StatusSuccess = 3,

	StatusUserCancelled = 4,

	Default = 5
}

declare class VisaCheckoutSDK extends NSObject {

	static alloc(): VisaCheckoutSDK; // inherited from NSObject

	static checkoutWithPurchaseInfoCompletion(purchaseInfo: VisaPurchaseInfo, completion: (p1: VisaCheckoutResult) => void): void;

	static checkoutWithTotalCurrencyCompletion(total: VisaCurrencyAmount, currency: VisaCurrency, completion: (p1: VisaCheckoutResult) => void): void;

	static configure(): void;

	static configureManualCheckoutSessionWithProfilePurchaseInfoPresentingViewControllerOnReadyResult(profile: VisaProfile, purchaseInfo: VisaPurchaseInfo, viewController: UIViewController, onReady: (p1: () => void) => void, result: (p1: VisaCheckoutResult) => void): void;

	static configureWithEnvironmentApiKeyProfileNameResult(environment: VisaEnvironment, apiKey: string, profileName: string, result: (p1: VisaCheckoutConfigStatus) => void): void;

	static configureWithProfileResult(profile: VisaProfile, result: (p1: VisaCheckoutConfigStatus) => void): void;

	static isReady(): boolean;

	static new(): VisaCheckoutSDK; // inherited from NSObject

	static updatePaymentInfoWithParameters(parameters: NSDictionary<string, any>): void;

	static marketingUrl: NSURL;
}

declare const enum VisaCountry {

	Argentina = 0,

	Australia = 1,

	Brazil = 2,

	Canada = 3,

	Chile = 4,

	China = 5,

	Colombia = 6,

	France = 7,

	HongKong = 8,

	India = 9,

	Ireland = 10,

	Malaysia = 11,

	Mexico = 12,

	NewZealand = 13,

	Peru = 14,

	Poland = 15,

	Singapore = 16,

	SouthAfrica = 17,

	Spain = 18,

	UnitedArabEmirates = 19,

	UnitedKingdom = 20,

	UnitedStates = 21,

	Ukraine = 22,

	Kuwait = 23,

	SaudiArabia = 24,

	Qatar = 25
}

declare const enum VisaCurrency {

	Aed = 0,

	Ars = 1,

	Aud = 2,

	Brl = 3,

	Cad = 4,

	Clp = 5,

	Cny = 6,

	Cop = 7,

	Eur = 8,

	Gbp = 9,

	Hkd = 10,

	Inr = 11,

	Kwd = 12,

	Mxn = 13,

	Myr = 14,

	Nzd = 15,

	Pen = 16,

	Pln = 17,

	Qar = 18,

	Sar = 19,

	Sgd = 20,

	Uah = 21,

	Usd = 22,

	Zar = 23
}

declare class VisaCurrencyAmount extends NSObject {

	static alloc(): VisaCurrencyAmount; // inherited from NSObject

	static new(): VisaCurrencyAmount; // inherited from NSObject

	constructor(o: { decimalNumber: NSDecimalNumber; });

	constructor(o: { double: number; });

	constructor(o: { extendedGraphemeClusterLiteral: string; });

	constructor(o: { floatLiteral: number; });

	constructor(o: { int: number; });

	constructor(o: { integerLiteral: number; });

	constructor(o: { string: string; });

	constructor(o: { stringLiteral: string; });

	constructor(o: { unicodeScalarLiteral: string; });

	initWithDecimalNumber(amount: NSDecimalNumber): this;

	initWithDouble(amount: number): this;

	initWithExtendedGraphemeClusterLiteral(value: string): this;

	initWithFloatLiteral(value: number): this;

	initWithInt(amount: number): this;

	initWithIntegerLiteral(value: number): this;

	initWithString(amount: string): this;

	initWithStringLiteral(value: string): this;

	initWithUnicodeScalarLiteral(value: string): this;
}

declare const enum VisaDataLevel {

	Full = 0,

	None = 1,

	Summary = 2
}

declare const enum VisaEnvironment {

	Production = 0,

	Sandbox = 1
}

declare class VisaMessageHandler extends NSObject {

	static alloc(): VisaMessageHandler; // inherited from NSObject

	static new(): VisaMessageHandler; // inherited from NSObject

	static readonly configureVisaCheckoutPlugin: string;

	static readonly launchVisaCheckout: string;

	static readonly visaMessage: string;
}

declare class VisaProfile extends VInitInfo {

	static alloc(): VisaProfile; // inherited from NSObject

	static new(): VisaProfile; // inherited from NSObject

	acceptCanadianDebitCards: boolean;

	acceptedBillingCountries: NSArray<any>;

	acceptedCardBrands: NSArray<any>;

	acceptedShippingCountries: NSArray<any>;

	apiKey: string;

	applyChildDirectedTreatmentForGoogleAds: boolean;

	clientId: string;

	countryCode: string;

	customerSupportUrl: string;

	datalevel: VisaDataLevel;

	displayName: string;

	enableTokenization: boolean;

	encryptionKey: string;

	environment: VisaEnvironment;

	externalClientId: string;

	facebookAdvertisingID: string;

	facebookAppID: string;

	locale: string;

	logo: string;

	profileName: string;

	returningUserWelcomeMessage: string;

	websiteUrl: string;

	welcomeMessage: string;

	welcomeMessageDescription: string;

	constructor(o: { environment: VisaEnvironment; apiKey: string; profileName: string; });

	initWithEnvironmentApiKeyProfileName(environment: VisaEnvironment, apiKey: string, profileName: string): this;
}

declare class VisaPurchaseInfo extends VInitInfo {

	static alloc(): VisaPurchaseInfo; // inherited from NSObject

	static new(): VisaPurchaseInfo; // inherited from NSObject

	currency: VisaCurrency;

	currencyFormat: string;

	customData: NSDictionary<any, any>;

	customDescription: string;

	discount: VisaCurrencyAmount;

	enableUserDataPrefill: boolean;

	giftWrapCharges: VisaCurrencyAmount;

	miscellaneousCharges: VisaCurrencyAmount;

	onPrefillRequest: (p1: any, p2: (p1: any) => void) => void;

	orderId: string;

	promoCode: string;

	referenceCallId: string;

	requestId: string;

	reviewAction: VisaReviewAction;

	reviewMessage: string;

	shippingAndHandlingCharges: VisaCurrencyAmount;

	shippingRequired: boolean;

	sourceId: string;

	subtotal: VisaCurrencyAmount;

	tax: VisaCurrencyAmount;

	threeDSActive: boolean;

	threeDSSuppressChallenge: boolean;

	total: VisaCurrencyAmount;

	constructor(o: { total: VisaCurrencyAmount; currency: VisaCurrency; });

	initWithTotalCurrency(amount: VisaCurrencyAmount, currency: VisaCurrency): this;
}

declare const enum VisaReviewAction {

	CardOnFile = 0,

	Continue = 1,

	Pay = 2
}

declare var kAcceptCanadianDebitCards: string;

declare var kAcceptedBillingCountries: string;

declare var kAcceptedCardBrands: string;

declare var kAcceptedShippingCountries: string;

declare var kApiKey: string;

declare var kCampaignUrl: string;

declare var kClientId: string;

declare var kCountryCode: string;

declare var kCurrency: string;

declare var kCurrencyFormat: string;

declare var kCustomData: string;

declare var kCustomDescription: string;

declare var kCustomerSupportUrl: string;

declare var kDatalevel: string;

declare var kDiscount: string;

declare var kDisplayName: string;

declare var kEnableTokenization: string;

declare var kEnableUserDataPrefill: string;

declare var kEncryptionKey: string;

declare var kEnvironment: string;

declare var kExternalClientId: string;

declare var kGiftWrapCharges: string;

declare var kLocale: string;

declare var kMiscellaneousCharges: string;

declare var kOrderId: string;

declare var kProfileName: string;

declare var kPromoCode: string;

declare var kReferenceCallId: string;

declare var kRequestId: string;

declare var kReturningUserWelcomeMessage: string;

declare var kReviewAction: string;

declare var kReviewMessage: string;

declare var kShippingAndHandlingCharges: string;

declare var kShippingRequired: string;

declare var kSourceId: string;

declare var kSubtotal: string;

declare var kTax: string;

declare var kThreeDSActive: string;

declare var kThreeDSSuppressChallenge: string;

declare var kTotal: string;

declare var kVisaCardBrandAmex: string;

declare var kVisaCardBrandDiscover: string;

declare var kVisaCardBrandElectron: string;

declare var kVisaCardBrandElo: string;

declare var kVisaCardBrandMastercard: string;

declare var kVisaCardBrandVisa: string;

declare var kVisaCheckoutResultCallID: string;

declare var kVisaCheckoutResultCardBrand: string;

declare var kVisaCheckoutResultCountryCode: string;

declare var kVisaCheckoutResultEncryptedPaymentData: string;

declare var kVisaCheckoutResultEncryptionKey: string;

declare var kVisaCheckoutResultLastFourDigits: string;

declare var kVisaCheckoutResultPartialPaymentInstrument: string;

declare var kVisaCheckoutResultPartialShippingAddress: string;

declare var kVisaCheckoutResultPaymentCancel: string;

declare var kVisaCheckoutResultPaymentError: string;

declare var kVisaCheckoutResultPaymentMethodType: string;

declare var kVisaCheckoutResultPaymentSuccess: string;

declare var kVisaCheckoutResultPaymentType: string;

declare var kVisaCheckoutResultPostalCode: string;

declare var kVisaCheckoutResultResult: string;

declare var kVisaCheckoutResultStatusCode: string;

declare var kVisaCheckoutResultStatusName: string;

declare var kVisaCheckoutResultType: string;

declare var kVisaCountryCodeArgentina: string;

declare var kVisaCountryCodeAustralia: string;

declare var kVisaCountryCodeBrazil: string;

declare var kVisaCountryCodeCanada: string;

declare var kVisaCountryCodeChile: string;

declare var kVisaCountryCodeChina: string;

declare var kVisaCountryCodeColombia: string;

declare var kVisaCountryCodeFrance: string;

declare var kVisaCountryCodeHongKong: string;

declare var kVisaCountryCodeIndia: string;

declare var kVisaCountryCodeIreland: string;

declare var kVisaCountryCodeKuwait: string;

declare var kVisaCountryCodeMalaysia: string;

declare var kVisaCountryCodeMexico: string;

declare var kVisaCountryCodeNewZealand: string;

declare var kVisaCountryCodePeru: string;

declare var kVisaCountryCodePoland: string;

declare var kVisaCountryCodeQatar: string;

declare var kVisaCountryCodeSaudiArabia: string;

declare var kVisaCountryCodeSingapore: string;

declare var kVisaCountryCodeSouthAfrica: string;

declare var kVisaCountryCodeSpain: string;

declare var kVisaCountryCodeUkraine: string;

declare var kVisaCountryCodeUnitedArabEmirates: string;

declare var kVisaCountryCodeUnitedKingdom: string;

declare var kVisaCountryCodeUnitedStates: string;

declare var kWebsiteUrl: string;

declare var kWelcomeMessage: string;

declare var kWelcomeMessageDescription: string;
