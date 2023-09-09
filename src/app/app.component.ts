import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppModule } from "./app.module";
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";

@Component({
  standalone: true,
  imports: [RouterModule, AppModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auto-reg';
}
