import { EventData, ViewBase } from "tns-core-modules/ui/page";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { NSVisaCheckoutButton, VisaCheckoutPaymentResultEventData } from "nativescript-visa-checkout";

export function addVisaCheckoutButton(args: EventData): void {
    const view = <ViewBase>args.object;
    const placeholder = <LayoutBase>view.page.getViewById("vco-placeholder");
    placeholder.removeChildren();

    const vco = new NSVisaCheckoutButton({
        isLive: false,
        apiKey: "API_KEY",
        profileName: "PROFILE_NAME",
        displayName: "DISPLAY_NAME",
        total: 59.01,
        currency: "EUR"
    });

    vco.on(NSVisaCheckoutButton.PaymentResultEvent, (args: VisaCheckoutPaymentResultEventData) => console.log(`VCO Result: ${args.status} / CallId: ${args.callId}`));
    vco.height = 47;
    vco.width = 213;

    placeholder.addChild(vco);
}