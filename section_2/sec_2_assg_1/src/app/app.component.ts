import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sec_2_assg_1';
  displayParagraph:boolean = false;
  clickLog = [];
  

  onClickBtn(){
    this.displayParagraph = !this.displayParagraph;
    this.clickLog.push(this.clickLog.length);
  }

  getClickLog(){
    return this.clickLog;
  }
}
