import {HomeComponent} from "./home.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomePage} from "./pages/home/home.page";
const homeRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: HomePage
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
