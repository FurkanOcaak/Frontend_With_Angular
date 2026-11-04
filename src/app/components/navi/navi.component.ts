import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component'; 
@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CommonModule, RouterLink, CartSummaryComponent], 
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}