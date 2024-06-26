import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { SlidebarComponent } from "./components/slidebar/slidebar.component";
import { initFlowbite } from 'flowbite';
import { SlidecontentComponent } from "./components/slidecontent/slidecontent.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, LoginComponent, SlidebarComponent, SlidecontentComponent]
})
export class AppComponent implements OnInit {
  title = 'DashBoard';

  ngOnInit(): void {
    initFlowbite();
  }
}
