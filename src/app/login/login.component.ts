import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  message: string;
  constructor(private accountService: AccountService,
    private activeatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.activeatedRoute.queryParams.subscribe(params => {
    this.returnUrl = params['retunUrl'] || 'product';
    });
  }

loginUser(form: NgForm) {
  this.accountService.login( form.value.user, form.value.password).subscribe(t => {
    if (t) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.message = 'username or password is incorrect!';
    }
  });
}

}
