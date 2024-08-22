import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 loggedUser: string | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void
  {
    this.loggedUser = this.userService.getEmail();
  }

   logout() {
      this.userService.clearUser();
      this.router.navigate(['/login']);
    }

}
