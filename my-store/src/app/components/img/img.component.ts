import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://i.pinimg.com/originals/9a/66/11/9a66115b0534c437a93abf02db2ca7a1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
