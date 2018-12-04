import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  message: string;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private accountService: AccountService ) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.returnUrl = params['retunUrl'] || 'product';
    });
  }

  loginUser(form: NgForm) {
    this.accountService.login(form.value.user, form.value.password).subscribe(t => {
      if (t) {
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.message = 'username or password is incorrect!';
      }
    });
  }

}
