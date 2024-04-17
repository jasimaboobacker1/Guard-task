import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {
   public formsubmission = false;

  username: string = '';
  feedback: any;

  submit(username: string, feedback: any) {
    if(this.username || this.feedback){
      alert('Submitted Successfully')
      this.formsubmission = true; 
      this.username='';
      this.feedback='';
    }else{
      alert('Fill form Completely')
    }
  
  }

  canExit(): boolean {
    if (this.username || this.feedback) {
      return confirm('You have unsaved changes. Do you want to navigate away?');
    } else {
      return true;
    }
  }


}
