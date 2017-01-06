import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ContactComponent} from "./contact.component";
const contactRoutes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

export const contactRouting: ModuleWithProviders = RouterModule.forChild(contactRoutes);