import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() img: string = '';
  @Input() data: string = '';
  @Input() titulo: string = '';
  @Input() paragrafo: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut massa ac sapien ornare rutrum. Maecenas gravida sem vitae cursus faucibus. Etiam ut elit';
}
