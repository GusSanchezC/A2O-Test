import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outputs.component.html'
})
export class OutputsComponent {
  @Input() responseData: any;
}
