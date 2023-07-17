import { Component } from '@angular/core';
import { faAd, faAdd, faCoffee, faDeleteLeft, faEdit, faGear, faGraduationCap, faHashtag, faSearch, faTableList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  faTableList = faTableList
  faSearch = faSearch
  faAdd = faAdd
  faEdit = faEdit
  faGraduationCap = faGraduationCap
  faHashtag = faHashtag
  faGear = faGear

}
