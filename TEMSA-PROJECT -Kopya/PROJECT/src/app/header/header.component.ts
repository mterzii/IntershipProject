import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  template:`header`,
})
export class HeaderComponent
{
  items = [
    { id: 'Revenue', name: 'Revenue', label: 'Increase Revenue (Euro/3 Years)', options: [
        { value: 'N/A', text: 'N/A' },
        { value: '1-100', text: '1-100K' },
        { value: '100K-250K', text: '100K-250K' },
        { value: '250K-500K', text: '250K-500K' },
        { value: '500K-1Mio', text: '500K-1Mio' },
        { value: '>1Mio', text: '>1Mio' }
      ] },
    { id: 'Cost', name: 'Cost', label: 'Cost Optimization (Euro/3 Years)', options: [
        { value: 'N/A', text: 'N/A' },
        { value: '1-25K', text: '1-25K' },
        { value: '25K-100K', text: '25K-100K' },
        { value: '250K-500K', text: '250K-500K' },
        { value: '>500K', text: '>500K' }
      ] },
    { id: 'C/E', name: 'Experience', label: 'Customer/Employee Experience', options: [
        { value: 'N/A', text: 'N/A' },
        { value: 'Little', text: 'Little' },
        { value: 'Moderate', text: 'Moderate' },
        { value: 'Medium', text: 'Medium' },
        { value: 'High', text: 'High' },
        { value: 'Strong', text: 'Strong' }
      ] },
    { id: 'Regulative', name: 'Regulative', label: 'Regulative', options: [
        { value: 'N/A', text: 'N/A' },
        { value: 'Nice to Have', text: 'Nice to Have' },
        { value: 'Potential Gap', text: 'Potential Gap' },
        { value: 'Potential Penalty', text: 'Potential Penalty' },
        { value: 'Must Have', text: 'Must Have (Possible Penalty)' }
      ] },
    { id: 'Strategy', name: 'Strategy', label: 'Other Company Strategy', options: [
        { value: 'N/A', text: 'N/A' },
        { value: 'Little', text: 'Little' },
        { value: 'Moderate', text: 'Moderate' },
        { value: 'Medium', text: 'Medium' },
        { value: 'High', text: 'High' },
        { value: 'Strong', text: 'Strong' }
      ] }
  ];
  scores: number[] = [];
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


