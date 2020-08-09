import { Component, Injectable, VERSION, ViewChild, ElementRef } from '@angular/core';
import { ProfilePanelService } from './services/profilePanel.service';

function _window():any {
  return window;
}

@Injectable()
  export class WindowRef {
    get nativeWindow():any {
      return _window();
    }
  }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  host: {
    "(window:resize)":"onWindowResize($event)", "(window:scroll)":"onScroll($event)"
  }
})
export class AppComponent  {
  
  windowSize: any;
  isMobile :boolean = false;
  window:any;
  width:number = window.innerWidth;
  height:number = window.innerWidth;
  mobileWidth:number = 760;
  modal:boolean;
  profilePanelStatus:boolean;

  @ViewChild('headerComponent', {static:false}) headerComponent:ElementRef;

  constructor(
    private profileService:ProfilePanelService
  ){}

  ngOnInit():void {
    this.isMobile = this.width < this.mobileWidth;
    this.profileService.currentVal.subscribe(currentVal => this.profilePanelStatus = currentVal);
  }

  ngAfterViewInit(){
    this.headerComponent.nativeElement.addEventListener('mouseover', function(){
      this.classList.remove('header-scroll');
    })
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
  }

  onScroll(event){
    window.pageYOffset > 200 ?
      this.headerComponent.nativeElement.classList.add('header-scroll') :
      this.headerComponent.nativeElement.classList.remove('header-scroll')
  }

}

