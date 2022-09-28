import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['server.component.css']

})
export class ServerComponent {
    serverStatus: string = "offline";
    serverID: number = 10;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        if (this.getServerStatus() == 'online')
            return "green";
        return "red";
    }
}