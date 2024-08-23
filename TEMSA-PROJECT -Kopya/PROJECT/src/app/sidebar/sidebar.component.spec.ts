import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
})
export class SidebarComponent {
  menuLinks: any;
  Dashboard: any;
  
  toggleMenu() {
    console.log('Menu toggled');
    if (this.menuLinks) {
      this.menuLinks.nativeElement.classList.toggle('show');
    } else {
      console.error('Menu links not found');
    }
  }

  showDashboard() {
    if (this.Dashboard) {
      this.Dashboard.nativeElement.classList.toggle('show');
    } else {
      console.error('Dashboard not found');
    }
  }
}
