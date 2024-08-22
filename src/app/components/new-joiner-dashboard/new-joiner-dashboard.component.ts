import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-new-joiner-dashboard',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './new-joiner-dashboard.component.html',
  styleUrl: './new-joiner-dashboard.component.css'
})
export class NewJoinerDashboardComponent {
      loggedUser = '';
      currRole = '';
//       courses : Observable<any[]> | undefined;

      ngOnInit(): void
      {

      }
}