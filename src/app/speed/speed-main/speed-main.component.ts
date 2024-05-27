import { Component } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { SpeedItem } from '../models/speed-item.interface';
import { interval, Subscription } from 'rxjs';
import { AnimationEvent, trigger, state, style, animate, transition } from '@angular/animations';
import { EmojiGenerator } from '../../common/emoji-generator-v2';
import { SpeedItemComponent } from '../speed-item/speed-item.component';
import { HashLocationStrategy, LocationStrategy, NgFor, NgIf } from '@angular/common';
import { TranslocoDirective, TranslocoService, translate, translateObject } from '@jsverse/transloco';
import { ShareButtonsModule  } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  standalone: true,
  selector: 'speed-main',
  imports: [SpeedItemComponent, NgIf, NgFor, TranslocoDirective, ShareButtonsModule, FontAwesomeModule, ShareIconsModule],
  providers: [Meta],
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

  language: string = 'en';

  sizeItem: number = 50;
  itemFontSize: number = 20;
  mode: string = "";

  challengeScore: number = 0;
  challengeMode: string = "";

  private cryptoKey = "2134nsadi9";

  constructor(private activatedroute:ActivatedRoute, private translocoService: TranslocoService) {
    
    var info: string =this.activatedroute.snapshot.paramMap.get("info") ?? "";

    if(info != ""){
      info = this.dec(info);
      this.challengeScore = Number.parseInt(info.split(';')[0]);
      this.challengeMode = info.split(';')[1];
    }
    this.language = navigator.language.split('-')[0];
  
  }

  createBoard(numCols:number, numRows: number){
    this.numCols = numCols;
    this.numRows = numRows;

    this.itemFontSize = 20;
    this.sizeItem = 50;

    this.mainWidth = this.numCols * this.sizeItem;

    var screenWidth = window.innerWidth;

    if(this.mainWidth > screenWidth){
        this.mainWidth = screenWidth;
        this.sizeItem = this.mainWidth / this.numCols;
        if(this.itemFontSize - this.sizeItem < 10) {
          this.itemFontSize = this.sizeItem - 10;
          if(this.itemFontSize <= 0) {
            this.itemFontSize = this.sizeItem;
          }
        }
    }

    
    this.partWidth = this.mainWidth / 3;

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
    if(secNum < 0) secNum = 0;
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
    this.mode = mode;
    this.startGame();
  }

  startGame(){
    this.points = 0;
    this.seconds = 60;
    this.refreshTime();
    
    if(!this.subscription || this.subscription == Subscription.EMPTY){
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

    this.createItems();

    this.screen = "game";
  }

  onAnimationEvent(event: AnimationEvent){
    if(this.colorState != "normal")
      this.colorState = "normal";
  }

  retry(){
    this.startGame();
  }

  back(){
    this.points = 0;
    this.seconds = 60;
    this.screen = "intro";
  }

  challengeInfo():string{
    return this.enc(`${this.points.toString()};${this.mode}`).toString();
  }

  enc(plainText:string):string{
    var b64 = CryptoJS.AES.encrypt(plainText, this.cryptoKey).toString();
    var e64 = CryptoJS.enc.Base64.parse(b64);
    var eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
  }

  dec(cipherText:string):string{
    var reb64 = CryptoJS.enc.Hex.parse(cipherText);
    var bytes = reb64.toString(CryptoJS.enc.Base64);
    var decrypt = CryptoJS.AES.decrypt(bytes, this.cryptoKey);
    var plain = decrypt.toString(CryptoJS.enc.Utf8);
    return plain;
  }

  challengeText(baseTextKey:string, scoreVal: number, modeVal: string):string{
    var baseText = this.translocoService.translate(baseTextKey, {}, this.language);
    return baseText.replace('{0}', scoreVal.toString()).replace('{1}', this.translocoService.translate(modeVal, {}, this.language));
  }

}
