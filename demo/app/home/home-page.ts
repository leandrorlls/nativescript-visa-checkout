import { NavigatedData, Page, EventData, ViewBase } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { VisaCheckout, VisaCheckoutPaymentResultEventData, VisaCheckoutConfig } from "nativescript-visa-checkout";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

export function addVisaCheckoutButton(args: EventData): void {
    const view = <ViewBase>args.object;
    const placeholder = <LayoutBase>view.page.getViewById("vco-placeholder");
    placeholder.removeChildren();

    const vcoConfig: VisaCheckoutConfig = {
        environment: "sandbox",
        apiKey: "YOUR_API_KEY",
        profileName: "YOUR_PROFILE_NAME",
        currency: "GBP", // Only GBP and EUR for now 
        total: 10.08
    }

    const vco = new VisaCheckout(vcoConfig);
    vco.on(VisaCheckout.paymentResultEvent, (args: VisaCheckoutPaymentResultEventData) => onPaymentResult(args));
    vco.height = 47;
    vco.width = 213;

    placeholder.addChild(vco);
}

export function onPaymentResult(args: VisaCheckoutPaymentResultEventData): void {
    console.log("onPayment", args.status, args.callId);
}