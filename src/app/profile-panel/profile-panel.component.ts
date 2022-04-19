import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfilePanelService } from '../services/profilePanel.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent implements OnInit {
  profilePanelStatus: boolean;

  @ViewChild('accordionParent', { static: false }) accordionParent: ElementRef;

  constructor(private profileService: ProfilePanelService) {}

  ngOnInit(): void {
    this.profileService.currentVal.subscribe(
      (currentVal) => (this.profilePanelStatus = currentVal)
    );
  }
}
