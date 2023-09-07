import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent {
  @Input() versaoEspecial: boolean = false;
  @Input() atuacao: boolean = false;
}
