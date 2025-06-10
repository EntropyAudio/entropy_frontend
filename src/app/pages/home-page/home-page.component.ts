import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }
}
