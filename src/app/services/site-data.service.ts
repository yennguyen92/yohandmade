import { Injectable } from '@angular/core';
import {DatabaseService} from "./database.service";
import {SiteInfo} from "../models/SiteInfo";

@Injectable()
export class SiteDataService extends DatabaseService<SiteInfo>{

  private siteInfo:SiteInfo = null;
  constructor() {
    super(SiteInfo);
  }

  async getSiteInfo():Promise<SiteInfo> {
      let info: any = await this.getAll();
      console.log('info: %s', JSON.stringify(info));
      let siteInfo = null;
      if(Array.isArray(info.rows)&& info.rows.length>0){
        siteInfo = info.rows[0].doc;
      }
      return siteInfo;
  }

}
