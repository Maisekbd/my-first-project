import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl:'./Server.component.html'
})
export class ServerComponent {
    ServerIp: number = 10;
    ServerStatus: string = 'offline';

    GetServerStatus()
    {
        return this.ServerStatus;
    }
}
