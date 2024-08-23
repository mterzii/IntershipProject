import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ComplexityComponent } from "./complexity/complexity.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
})



export class AppModule {}