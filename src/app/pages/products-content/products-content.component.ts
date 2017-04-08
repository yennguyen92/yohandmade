import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-products-content',
  templateUrl: './products-content.component.html',
  styleUrls: ['./products-content.component.sass']
})
export class ProductsContentComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSelect(hero: any) {
    //this.router.navigate([crisis.id], { relativeTo: this.router });
    this.router.navigate(['/hero', hero.id]);
  }
}
