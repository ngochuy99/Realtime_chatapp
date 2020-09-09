import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControlName, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './create-room-dialog.component.html',
  styleUrls: ['./create-room-dialog.component.scss']
})
export class CreateRoomDialogComponent implements OnInit {
  private Createform: FormGroup;
  private room:FormControl;
  private password:FormControl;
  hide = true;
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<CreateRoomDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.room = new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')]);
    this.password = new FormControl('');
    this.Createform = fb.group({
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
