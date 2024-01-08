import { Component } from '@angular/core';
import { SpeedItem } from '../models/speed-item.interface';
import { interval, Subscription } from 'rxjs';
import { AnimationEvent, trigger, state, style, animate, transition } from '@angular/animations';
import { EmojiGenerator } from '../../common/emoji-generator-v2';
import { SpeedItemComponent } from '../speed-item/speed-item.component';
import { NgFor, NgIf } from '@angular/common';


@Component({
  standalone: true,
  selector: 'speed-main',
  imports: [SpeedItemComponent, NgIf, NgFor],
  templateUrl: './speed-main.component.html',
  styleUrls: ['./speed-main.component.scss'],
  animations: [
    trigger('changeColor', [
      state('normal', style({
        backgroundColor: '#ffffff'
      })),
      state('correct', style({
        backgroundColor: '#9addb5'
      })),
      state('wrong', style({
        backgroundColor: '#ed7171'
      })),
      transition('* => correct', animate('1ms ease-in')),
      transition('* => wrong', animate('1ms ease-in')),
      transition('* => normal', animate('800ms ease-out'))
    ])
  ]
})
export class SpeedMainComponent {
  time:string = "";
  seconds:number = 0;
  points: number = 0;
  numRows: number = 0;
  numCols: number = 0;
  mainWidth: number = 0;
  partWidth: number = 0;
  items: SpeedItem[] = [];
  targetItem: SpeedItem = {value: ""};
  timeInterval = interval(1000);
  subscription: Subscription;
  screen:string = "intro";
  colorState: string = 'normal';

  constructor() {
    

    //this.subscription = interval(1000).subscribe(() => {
      /*if(this.screen == "game"){
        if(this.seconds > 0){
          this.seconds--;
    
          this.refreshTime();
        } else {
          this.screen = "end";
        }
      }*/
    //});
  }

  createBoard(numCols:number, numRows: number){
    this.numCols = numCols;
    this.numRows = numRows;

    this.mainWidth = this.numCols * 50;
    this.partWidth = this.mainWidth / 3;

    this.createItems();
  }

  createItems(){
    this.items = [];

    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        this.items.push({value: this.getNewEmoji()});
      }
    }

    this.targetItem = this.getRandomItem();
  }

  getNewEmoji():string {
    let emoji:string = "";
    do {
      emoji = EmojiGenerator.getRandomEmoji();
    } while (this.existsItemWithValue(emoji));
    return emoji;
  }

  existsItemWithValue(value:string):boolean{
    for (const item of this.items) {
      if(item.value == value) return true;
    }
    return false;
  }

  getRandomItem():SpeedItem{
    return this.items[Math.floor(Math.random() * this.items.length)];
  }

  setColorState(colorState: string){
    this.colorState = colorState;
  }

  onSelect(item:SpeedItem){
    if(item.value == this.targetItem.value){
      this.setColorState("correct");
      this.points++;
      item.value = this.getNewEmoji();
      this.targetItem = this.getRandomItem();
    } else {
      this.setColorState("wrong");
      this.seconds -= 2;
      this.refreshTime();
    }
  }

  refreshTime(){
    let secNum = Math.floor(this.seconds);
    let m = Math.floor(secNum / 60).toString().padStart(2, '0');
    let s = (secNum - (m as any * 60)).toString().padStart(2, '0');
    this.time = `${m}:${s}`;
  }

  startBtnClick(mode:string){
    switch (mode) {
      case "easy":
        this.createBoard(5, 5);
        break;
      default:
      case "normal":
        this.createBoard(10, 10);
        break;
      case "hard":
        this.createBoard(15, 15);
        break;
    }

    this.refreshTime();
    
    if(!this.subscription){
      this.subscription = this.timeInterval.subscribe((integer) => {
        if(this.screen == "game"){
          if(this.seconds > 0){
            this.seconds--;
      
            this.refreshTime();
          } else {
            this.subscription.unsubscribe();
            this.subscription = Subscription.EMPTY;

            this.screen = "end";
          }
        }
      });
    }

    this.points = 0;
    this.seconds = 60;
    this.screen = "game";
  }

  onAnimationEvent(event: AnimationEvent){
    if(this.colorState != "normal")
      this.colorState = "normal";
  }

  retry(){
    this.points = 0;
    this.seconds = 60;
    this.createItems();
    this.screen = "game";
  }

  back(){
    this.points = 0;
    this.seconds = 60;
    this.screen = "intro";
  }
}
