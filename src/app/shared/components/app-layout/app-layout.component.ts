import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent {}