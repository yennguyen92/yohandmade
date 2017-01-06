import {NgModule} from "@angular/core";
import {contactRouting} from "./contact.routing";
import {ContactContentComponent} from "./components/contact-content/contact-content.component";
import {ContactComponent} from "./contact.component";

@NgModule({
    imports: [
        contactRouting
    ],
    declarations: [
        ContactComponent,
        ContactContentComponent
    ]
})
export class ContactModule {}
