import {Component, NgZone, OnInit} from '@angular/core';
import {SiteDataService} from "../../services/site-data.service";
import {SiteInfo} from "../../models/SiteInfo";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  public siteInfo: SiteInfo;
  constructor(private siteDataService:SiteDataService,  private zone: NgZone) { }

  async ngOnInit() {
    this.siteInfo= new SiteInfo();
    this.siteDataService.getChangeListener().subscribe(data => {
      for(let i = 0; i < data.change.docs.length; i++) {
        this.zone.run(() => {
          this.siteInfo =  data.change.docs[i];
        });
      }
    });
    this.siteInfo = await this.siteDataService.getSiteInfo();
  }

  async updateSiteInfo(){
    await this.siteDataService.put(this.siteInfo._id, this.siteInfo);
  }

}
