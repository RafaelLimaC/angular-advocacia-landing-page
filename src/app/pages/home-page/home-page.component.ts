import { Component } from '@angular/core';
import { SlideInterface } from 'src/app/shared/slider/types/slider.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  slides: SlideInterface[] = [
    { 
      url: '/assets/image-1.jpeg', 
      title: 'beach',
      content: '“Primeiro ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor lectus, eleifend consectetur diam nec, auctor porta magna. Aenean eget sollicitudin ligula. Proin eu sagittis purus. ”',
      autor: 'BRENO MOTTA CERANTE',
      empresa: 'CERANTE EMPREENDIMENTOS'
    },
    { 
      url: '/assets/image-2.jpeg', 
      title: 'boat',
      content: '“Segundo ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor lectus, eleifend consectetur diam nec, auctor porta magna. Aenean eget sollicitudin ligula. Proin eu sagittis purus. ”',
      autor: 'JAMES MARTUNG',
      empresa: 'FULLTIME'
    },
    { 
      url: '/assets/image-3.jpeg', 
      title: 'forest',
      content: '“Terceiro ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor lectus, eleifend consectetur diam nec, auctor porta magna. Aenean eget sollicitudin ligula. Proin eu sagittis purus. ”',
      autor: 'CAMILO RAMALHO',
      empresa: 'INSTITUTO DE MEDICINA NUCLEAR'
    },
    { 
      url: '/assets/image-4.jpeg', 
      title: 'city',
      content: '“Quarto ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor lectus, eleifend consectetur diam nec, auctor porta magna. Aenean eget sollicitudin ligula. Proin eu sagittis purus. ”',
      autor: 'ISABELA FRANCO',
      empresa: 'IFRANCO ENGENHARIA'
    },
  ];
}
