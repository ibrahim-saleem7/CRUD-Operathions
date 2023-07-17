import { Component, OnInit } from '@angular/core';
import { faFileArrowDown, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// import { ServiceService } from './services/service.service';
import { FormsModule } from '@angular/forms';


declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor() {}

  title = 'CMS';
}
