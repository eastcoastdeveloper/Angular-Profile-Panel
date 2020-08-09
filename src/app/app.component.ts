import { Component, Injectable, VERSION, ViewChild, ElementRef } from '@angular/core';
import { ProfilePanelService } from './services/profilePanel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  
  modal:boolean;
  profilePanelStatus:boolean;

  @ViewChild('headerComponent', {static:false}) headerComponent:ElementRef;

  constructor(
    private profileService:ProfilePanelService
  ){}

  ngOnInit():void {
    this.profileService.currentVal.subscribe(currentVal => this.profilePanelStatus = currentVal);
  }

}

