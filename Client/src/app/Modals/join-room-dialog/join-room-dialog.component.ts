import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControlName, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-join-room-dialog',
  templateUrl: './join-room-dialog.component.html',
  styleUrls: ['./join-room-dialog.component.scss']
})
export class JoinRoomDialogComponent implements OnInit {
  private JoinForm: FormGroup;
  private room:FormControl;
  private password:FormControl;
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == "Enter"){
      this.Submit();
    }
  }
  
  hide = true;
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<JoinRoomDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.room = new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]);
    this.password = new FormControl('');
    this.JoinForm = fb.group({
      room:this.room,
      password:this.password,
    })
   }

  ngOnInit() {
  }
  Submit(){
    this.dialogRef.close({
      room:this.room.value,
      password:this.password.value
    });
  }
  Exit(){
    this.dialogRef.close();
  }
}
