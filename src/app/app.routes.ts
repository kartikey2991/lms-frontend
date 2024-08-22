import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeletecourseComponent } from './components/deletecourse/deletecourse.component';
import { UpdatecourseComponent } from './components/updatecourse/updatecourse.component';
import { CourselistfalseComponent } from './components/courselistfalse/courselistfalse.component';
import { CourselisttrueComponent } from './components/courselisttrue/courselisttrue.component';
import { MentorListComponent } from './components/mentorlist/mentorlist.component';
import { NewJoinerListComponent } from './components/newjoinerlist/newjoinerlist.component';
import { StudentQueriesComponent } from './components/studentqueries/studentqueries.component';
import { NewJoinerDashboardComponent } from './components/new-joiner-dashboard/new-joiner-dashboard.component';
import { CourseliststudentComponent } from './components/courseliststudent/courseliststudent.component';

export const routes: Routes = [
    { path: 'admin-dashboard', component: AdminDashboardComponent },
    { path: 'addcourse', component: AddcourseComponent }, 
    { path: 'deletecourse', component: DeletecourseComponent },
    { path: 'updatecourse', component: UpdatecourseComponent },
    { path: 'courselistfalse', component: CourselistfalseComponent },
    { path: 'courselisttrue', component: CourselisttrueComponent },
    { path: 'mentorlist', component: MentorListComponent },
    { path: 'newjoinerlist', component: NewJoinerListComponent },
    { path: 'student-queries', component: StudentQueriesComponent },
    { path: 'newJoinerDashboard', component: NewJoinerDashboardComponent },
    { path: 'courselistStudent', component: CourseliststudentComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  
  export class AppRoutingModule { }
