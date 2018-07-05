import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
    //selector:'.app-servers',
    selector:'app-servers',
//  template: `<app-server></app-server>
//<hr/>
//<app-server></app-server>
    //`,
    templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowServerStatus = false;

    

    constructor() {
        setTimeout(()=> {
            this.allowServerStatus = true;
        }, 2000);
    }

  ngOnInit() {
  }

}
