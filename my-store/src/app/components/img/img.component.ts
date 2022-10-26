import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://i.pinimg.com/originals/9a/66/11/9a66115b0534c437a93abf02db2ca7a1.jpg';

  constructor() {
    //antes del renderizado
    // No  correr cosas ayncronas, esto se corre solo una vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    //antes del renderizado
    // aqui si se pueden correr cosas asincronas y corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    //despues del render
    //se manipulan los hijos
    console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
    //elimina el componente
    console.log('ngAfterViewInit');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
