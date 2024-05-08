import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'israel';
  public nameUpper: string = 'ISRAEL';
  public fullName: string = 'ISRaeL JimÉnEz';

  public customDate: Date = new Date();
}
