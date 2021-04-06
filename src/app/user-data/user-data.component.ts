import {Component, OnInit} from '@angular/core';
import {GitUser} from '../git-user';
import { RepoServiceService } from '../repo-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user: GitUser[];
  particlesJS: any;

  constructor(private service: RepoServiceService) {
  }

  getSearchedUser(searchTerm) {
    //this.service.getsearchMyUser(searchTerm).subscribe(
      //(success) => {
        //console.log(this.user);
      //},
      this.service.getsearchMyUser(searchTerm).subscribe(data => {
        this.getSearchedUser = data;
        console.log(this.getSearchedUser);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('deepeters');
    // tslint:disable-next-line:prefer-const
    let particlesJS;
    particlesJS.load('particles-js', 'particles.json', null);
  }

}
