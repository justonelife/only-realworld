import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" routerLink="/">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/login">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/register">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  standalone: true,
  imports: [
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}