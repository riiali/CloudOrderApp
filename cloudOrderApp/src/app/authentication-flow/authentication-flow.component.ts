import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-authentication-flow',
  templateUrl: './authentication-flow.component.html',
  styleUrls: ['./authentication-flow.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService, UserService]
})
export class AuthenticationFlowComponent implements OnInit {
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const id = params['id'];
      const token = params['token'];
      this.userService.getUser(id).subscribe({
        next: (user: any) => {
          console.log("user");
          console.log(user);
          this.authService.signUp(user.username, token, user.email).subscribe({
            next: () => this.router.navigate([`/orders/${user.groupId}`]),
            error: (error) => this.showError('Authentication failed')
          });
        },
        error: (error) => this.showError('User not found')
      });
    });
  }

  private showError(message: string) {
    this.loading = false;
    this.errorMessage = message;
  }
}
