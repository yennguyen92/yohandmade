
import {NgModule} from "@angular/core";
import {BlogComponent} from "./blog.component";
import {blogRouting} from "./blog.routing";
import {BlogContentComponent} from "./components/blog-content/blog-content.component";

@NgModule({
    imports: [
        blogRouting
    ],
    declarations: [
        BlogComponent,
        BlogContentComponent
    ]
})
export class BlogModule {}
