import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { CompletedTasksComponent } from './components/pages/completed-tasks/completed-tasks.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {
        path:"",
        component:AllTaskComponent
    },
    {
        path:"importants",
        component:ImportantTasksComponent,canActivate:[authGuard]
    },
    {
        path:"completed",
        component:CompletedTasksComponent
    },
    {
        path:"login",
        component:LoginComponent,title:'Login'
    }

];
