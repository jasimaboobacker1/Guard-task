import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import EventEmitter from 'events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'guards';
  @Output() loginshowChanged = new EventEmitter<any>();

  constructor(private router:Router){}

  public userShow=false;
  public loginshow=true;
  public adminshow=false;


  Logout(){
    localStorage.clear();
    this.userCheck();
    this.admincheck();
    this.router.navigateByUrl('')
    window.location.reload();
  }

  userCheck() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      this.userShow = true;
      this.loginshow = false;
    } else {
      this.userShow = false;
      this.loginshow = false;
    }
  }
  
  admincheck(){
    if(typeof localStorage !== 'undefined' && localStorage.getItem('admin')){
      this.adminshow=true;
      this.loginshow=false;
      this.router.navigateByUrl('admindashboard')
    }else{
      this.adminshow=false;
      this.loginshow=true;   
    }
  }

  ngOnInit(): void {
   this.userCheck();
   this.admincheck();
  }
}
