import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {StateService} from "../services/state.service";
import {ReqService} from "../services/req.service";
import {FirestoreService} from "../services/firestore.service";
import {MatMenu} from "@angular/material/menu";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  signedIn = false
  showSettingsMenu = false
  showAudioSettings = false
  showCreditsMenu = false

  constructor(private auth: AngularFireAuth,
              public router: Router,
              private stateService: StateService,
              public reqService: ReqService,
              public firestore: FirestoreService) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.signedIn = true
      } else {
        this.signedIn = false
      }
    });
  }

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

  returnToSettingsMenuDelay(event: any) {
    event.stopPropagation();
    console.log(this.showSettingsMenu)
    if(this.showCreditsMenu || this.showAudioSettings){
      setTimeout(() => {
        this.showAudioSettings = false
        this.showCreditsMenu = false
        this.showSettingsMenu = false
      }, 250);
    }
    else {
      this.showAudioSettings = false
      this.showCreditsMenu = false
      this.showSettingsMenu = true
    }
  }

  updateWaveboxes(value: number) {
    if(this.reqService.numAudio.value != value) {
      this.reqService.updateNumAudio(value)
    }
  }

  signOut(): void {
    this.auth.signOut().then(() => {
      this.stateService.print("User signed out successfully");
    });
  }
}
