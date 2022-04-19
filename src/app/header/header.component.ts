import { Component, OnInit } from '@angular/core';
import { ProfilePanelService } from '../services/profilePanel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profilePanelStatus: boolean;

  constructor(private profileService: ProfilePanelService) {}

  ngOnInit() {
    this.profileService.currentVal.subscribe(
      (currentVal) => (this.profilePanelStatus = currentVal)
    );
  }

  toggleProfilePanel() {
    this.profilePanelStatus = !this.profilePanelStatus;
    this.profileService.changeValue(this.profilePanelStatus);
  }
}
