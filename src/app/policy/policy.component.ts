import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent {
  
}    
