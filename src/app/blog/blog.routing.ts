import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {BlogComponent} from "./blog.component";
const blogRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: BlogComponent
    }
];

export const blogRouting: ModuleWithProviders = RouterModule.forChild(blogRoutes);