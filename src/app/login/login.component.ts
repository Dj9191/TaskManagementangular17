import { Component } from '@angular/core';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
login(userid:any,password:any)
{
  if(userid =='ab' && password=='123')
  {
    sessionStorage.setItem("isloggedIn","true");
  }
  else{
    sessionStorage.setItem("isloggedIn","false");
  }
}

cancel()
{
  
}
}
