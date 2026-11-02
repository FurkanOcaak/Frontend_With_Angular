import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaviComponent, CategoryComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'John Doe';
  
}
