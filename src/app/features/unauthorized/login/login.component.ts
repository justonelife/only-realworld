import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UnauthorizedComponent } from '../layout/unauthorized/unauthorized.component';

@Component({
  selector: 'app-login',
  template: `
    <app-unauthorized>
      <h1 class="text-xs-center">Sign in</h1>
      <p class="text-xs-center">
        <a href="/register">Need an account?</a>
      </p>

      <ul class="error-messages">
        <li>That email is already taken</li>
      </ul>

      <form>
        <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Email"
          />
        </fieldset>
        <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            type="password"
            placeholder="Password"
          />
        </fieldset>
        <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
      </form>
    </app-unauthorized>
  `,
  standalone: true,
  imports: [UnauthorizedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
