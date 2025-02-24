
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Register } from '../models/register.model';
import { TodoAppService } from '../services/todo-app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(public service: TodoAppService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    this.service.registerUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted successfully", "User Registered");
      },
      err => { console.log(err);
        this.toastr.error("Ohh!! Sorry registration Failed ", "Please try again");
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.registerData = new Register();
  }

}