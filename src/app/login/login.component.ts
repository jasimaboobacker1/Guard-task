import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username: string = '';
  password: any;

  constructor(private router:Router){}

  Login(username: string, email: string): void {
    if(this.username=='admin123' && this.password=='1234567'){
      localStorage.setItem('admin','admin123');
      localStorage.setItem('password','1234567')
      this.router.navigateByUrl('/admindashboard')
      window.location.reload();

    }else{
      localStorage.setItem('username',this.username);
      localStorage.setItem('password',this.password);
      const token = uuidv4();
      localStorage.setItem('token', token);
      // alert('Login Successfull')
      this.router.navigateByUrl('/userhome')
      window.location.reload();
    }
  }

  ngOnInit(): void {
    
  }
}
