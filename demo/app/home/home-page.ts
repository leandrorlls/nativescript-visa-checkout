import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { VisaCheckoutPaymentEventData } from "nativescript-visa-checkout";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

// export function addVisaCheckoutButton(args: EventData): void {
//     const btn = <ViewBase>args.object;
//     const stackLayout = <LayoutBase>btn.parent;
//     console.log("Creating VisaCheckout class");
//     const vco = new VisaCheckout();
//     vco.height = 250;
//     vco.width = 250;
//     vco.backgroundColor = "red";
//     console.log("VisaCheckout class created");
//     stackLayout.addChild(vco);
// }

export function onPayment(args: VisaCheckoutPaymentEventData): void {
    console.log("onPayment", args.status, args.callId);
}