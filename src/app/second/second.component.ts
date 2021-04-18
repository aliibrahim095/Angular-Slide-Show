import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.slideshow = setInterval(() => {
      this.nextImgFun();
    }, 1000);
  }

  imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  imgName: string = this.imgArr[0];
  currentIndex: number = 0;
  slideshow;
  prevImgFun() {
    if (this.currentIndex >= 0) {
      this.imgName = this.imgArr[this.currentIndex];
      this.currentIndex--;
    } else {
      this.currentIndex = this.imgArr.length - 1;
    }
  }
  nextImgFun() {
    if (this.currentIndex <= this.imgArr.length - 1) {
      this.imgName = this.imgArr[this.currentIndex];
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  playImgFun() {
    this.slideshow = setInterval(() => {
      this.nextImgFun();
    }, 1000);
  }
  pauseImgFun() {
    clearInterval(this.slideshow);
  }
}
