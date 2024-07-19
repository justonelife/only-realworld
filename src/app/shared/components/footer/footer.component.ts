import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container">
        <a routerLink="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp;
          design licensed under MIT.
        </span>
      </div>
    </footer>
  `,
  standalone: true,
  imports: [
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}