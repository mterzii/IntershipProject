import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('menuLinks', { static: false }) menuLinks!: ElementRef;
  @ViewChild('Dashboard', { static: false }) Dashboard!: ElementRef;
  DashboardActive: boolean = false;
  menuActive: boolean = false;
  router: any;

  ngAfterViewInit() {
    // ViewChild elemanları burada erişilebilir.
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    if (this.menuLinks) {
      this.menuLinks.nativeElement.classList.toggle('show', this.menuActive);
    } else {
      console.error('Menu links not found');
    }

    const toggleElement = document.getElementById('menu-toggle');
    if (toggleElement) {
      toggleElement.classList.toggle('active', this.menuActive);
    }
  }

  showDashboard() {
    this.router.navigateByUrl('/charts')
}
}
