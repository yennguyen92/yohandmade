import { Component, OnInit } from '@angular/core';
import {SiteDataService} from "../../services/site-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private siteDataService:SiteDataService) { }

  ngOnInit() {
  }

}
