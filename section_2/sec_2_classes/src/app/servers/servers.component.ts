import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreatedStatus: string = "No server was created";
  serverName:string;
  serverCreated : boolean = false;
  servers=['Test server', 'Test server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreatedStatus = "Server was created";
    this.serverCreated = true;
  }

  onUpdateServerName(event:Event ) {
    this.serverName = (<HTMLInputElement>event.target).value; 
  }

  getServersList(){
    return this.servers;
  }

}
