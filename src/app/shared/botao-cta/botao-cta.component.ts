import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-cta',
  templateUrl: './botao-cta.component.html',
  styleUrls: ['./botao-cta.component.css']
})
export class BotaoCtaComponent {
  @Input() label: string = '';
  @Input() router: string = '';
}
