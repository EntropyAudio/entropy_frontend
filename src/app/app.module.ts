import {NgModule, isDevMode} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InterfaceComponent } from './interface/interface.component';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from "@angular/material/input";
import { MatSliderModule} from "@angular/material/slider";
import { MatButtonToggleModule} from "@angular/material/button-toggle";
import { MatButtonModule} from "@angular/material/button";
import { MatGridListModule} from "@angular/material/grid-list";
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatProgressBarModule} from "@angular/material/progress-bar";
import { KeySelectComponent } from './interface/key-select/key-select.component';
import { BpmSelectComponent } from './interface/bpm-select/bpm-select.component';
import { SliderComponent } from './interface/slider/slider.component';
import { MatRippleModule} from "@angular/material/core";
import { MatIconModule} from "@angular/material/icon";
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AppPageComponent } from "./pages/app-page/app-page.component";
import { PreloadAllModules, RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import { routeConfig } from "./configs";
import { MatTab, MatTabGroup} from "@angular/material/tabs";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import { WaveboxComponent } from "./interface/wavebox/wavebox.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BottomLinksComponent } from "./bottom-links/bottom-links.component";


@NgModule({ declarations: [
        AppComponent,
        InterfaceComponent,
        NavbarComponent,
        KeySelectComponent,
        BpmSelectComponent,
        SliderComponent,
        AppPageComponent,
        HomePageComponent,
        WaveboxComponent
    ],
    exports: [
        NavbarComponent,
        InterfaceComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatSliderModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatRippleModule,
        ReactiveFormsModule,
        MatIconModule,
        MatMenuModule,
        MatSnackBarModule,
        RouterModule.forRoot(routeConfig, {preloadingStrategy: PreloadAllModules}),
        RouterOutlet,
        RouterLink,
        MatTabGroup,
        MatTab,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        }), BottomLinksComponent], providers: [
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimationsAsync(),
    ] })
export class AppModule {}
