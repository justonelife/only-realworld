import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from "@angular/core";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { filter, tap } from "rxjs";

interface PageRoute {
  label: string,
  routerLink: string,
}

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" routerLink="/">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          @for (route of routes; track route.routerLink) {
            <li class="nav-item">
              <a [routerLink]="route.routerLink" 
                class="nav-link"
                [class.active]="activedRoute === route.routerLink">
                {{ route.label }}
              </a>
            </li>
          }
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
export class HeaderComponent {
  readonly router = inject(Router);
  readonly cd = inject(ChangeDetectorRef);

  routes: PageRoute[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Sign in', routerLink: '/login' },
    { label: 'Sign up', routerLink: '/register' },
  ];

  activedRoute: string = '';

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(e => {
        if (e instanceof NavigationEnd) {
          this.activedRoute = '/' + e.urlAfterRedirects.split('/')[1];
          this.cd.markForCheck();
        }
      }),
      takeUntilDestroyed(),
    ).subscribe();
  }


}