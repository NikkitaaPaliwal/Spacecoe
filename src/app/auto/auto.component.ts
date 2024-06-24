import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [FormsModule,
     ReactiveFormsModule,
    CommonModule,
    ],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css',
  
})
export class AutoComponent {
  
  
}
