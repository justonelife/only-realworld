import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}