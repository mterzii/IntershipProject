import { Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ComplexityComponent } from "./complexity/complexity.component";

const routeConfig:Routes=[
    {
        path:'complexity',
        component:ComplexityComponent,
        title:'Dashboard'
    },
    
];

export default routeConfig;