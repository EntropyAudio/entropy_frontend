import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GenerationState, StateService} from "../services/state.service";
import {ReqService} from "../services/req.service";
import {AuthService} from "../services/auth/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showSettingsMenu = false
  showAudioSettings = false
  showCreditsMenu = false

  constructor(public authService: AuthService,
              public router: Router,
              public stateService: StateService,
              public reqService: ReqService) { }

  ngOnInit(): void {}

  openAudioSettings(event: any) {
    event.stopPropagation()
    this.showAudioSettings = true
    this.showCreditsMenu = false
    this.showSettingsMenu = false
  }

  openCreditsMenu(event: any) {
    event.stopPropagation()
    this.showCreditsMenu = true
    this.showAudioSettings = false
    this.showSettingsMenu = false
  }

  returnToSettingsMenu(event: any) {
    event.stopPropagation();
    this.showAudioSettings = false
    this.showCreditsMenu = false
    this.showSettingsMenu = true
  }

  exitSettingsMenu(event: any) {
    event.stopPropagation();
    this.showAudioSettings = false
    this.showCreditsMenu = false
    this.showSettingsMenu = false
  }

  isSubMenuShowing() {
    return this.showCreditsMenu || this.showAudioSettings && !this.showSettingsMenu
  }

  returnToSettingsMenuDelay(event: any) {
    event.stopPropagation();
    console.log(this.showSettingsMenu)
    if(this.showCreditsMenu || this.showAudioSettings){
      setTimeout(() => {
        this.exitSettingsMenu(event)
      }, 250);
    }
    else {
      this.returnToSettingsMenu(event)
    }
  }

  updateWaveboxes(value: number) {
    if(this.reqService.numAudio.value != value) {
      this.reqService.setNumAudio(value)
    }
  }

  protected readonly GenerationState = GenerationState;
}
