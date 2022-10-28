import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img);
    //codigo

  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/vacio.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //antes del renderizado
    // No  correr cosas ayncronas, esto se corre solo una vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
    // if(changes.) {

    // }
  }

  ngOnInit(): void {
    //antes del renderizado
    // aqui si se pueden correr cosas asincronas y corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    //despues del render
    //se manipulan los hijos
    console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
    //elimina el componente
    console.log('ngAfterViewInit');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
