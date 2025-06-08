import {Component, OnInit} from '@angular/core';
import {StateService} from "../../services/state.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private stateService: StateService,
              public authService: AuthService) {
  }

  ngOnInit() {
  }
}
