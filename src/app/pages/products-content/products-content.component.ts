import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-content',
  templateUrl: './products-content.component.html',
  styleUrls: ['./products-content.component.sass']
})
export class ProductsContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelect(hero: any) {
    //this.router.navigate([crisis.id], { relativeTo: this.router });
    this.router.navigate(['/hero', hero.id]);
  }
}
