import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-complexity',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './complexity.component.html',
  styleUrl: './complexity.component.css',
  template:`complexity,
  <a routerLink="complexity">Complexity</a>`
  
})
export class ComplexityComponent {


  cc=[
    {id:'H/D',name:':Human/Days',label:'Human/ Days (Inhouse IT effort)',
      options:[
        { value: 'N/A', text: 'N/A' },
        { value: '1-10h/d', text: '1-10h/d' },
        { value: '100K-250K', text: '100K-250K' },
        { value: '250K-500K', text: '250K-500K' },
        { value: '500K-1Mio', text: '500K-1Mio' },
        { value: '>1Mio', text: '>1Mio' }
      ]
    },
    { id: 'Budget', name: 'Budget', label: 'Budget (outsourced/procured)', options: [
      { value: 'N/A', text: 'N/A' },
      { value: '1-25K', text: '1-25K' },
      { value: '25K-100K', text: '25K-100K' },
      { value: '250K-500K', text: '250K-500K' },
      { value: '>500K', text: '>500K' }
    ] },
    { id: 'IntegrationSystem', name: 'IntegrationSystem', label: 'Integrations/Systems', options: [
      { value: 'N/A', text: 'N/A' },
      { value: '1', text: '1' },
      { value: '3', text: '3' },
      { value: '5', text: '5' },
      { value: '7', text: '7' },
      { value: '>7', text: '>7' }
    ] },
    { id: 'D/P', name: 'department/processes', label: 'Department/processes', options: [
      { value: 'N/A', text: 'N/A' },
      { value: '1', text: '1' },
      { value: '2', text: '2' },
      { value: '3', text: '3' },
      { value: '4', text: '4' },
      { value: '>4', text: '>4' }
    ] }
  ];
  
  scores:number[]=[];
  onSelectChange(event: any, index: number): void {
    this.scores[index] = event.target.selectedIndex;
    this.updateTotal();
  }

  get totalScore(): number {
    return this.scores.reduce((total, score) => total + score, 0);
  }

  private updateTotal(): void {
  }
  
}
