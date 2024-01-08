import { Component, Input } from '@angular/core';
import { SpeedItem } from '../models/speed-item.interface';

@Component({
  standalone: true,
  selector: 'speed-item',
  templateUrl: './speed-item.component.html',
  styleUrls: ['./speed-item.component.scss']
})
export class SpeedItemComponent {
  @Input() item: SpeedItem = {value: ""};
  constructor(){
        
  }
}
