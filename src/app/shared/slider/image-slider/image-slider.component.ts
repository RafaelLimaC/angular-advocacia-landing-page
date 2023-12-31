import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { SlideInterface } from '../types/slider.interface';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;
  activeDotIndex: number = 0;

  ngOnInit(): void {
    this.resetTimer();
  }
  
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }

  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 5000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
    this.updateActiveDotIndex()
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
    this.updateActiveDotIndex()
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
    this.updateActiveDotIndex()
  }

  getCurrentSliderContent() {
    return `${this.slides[this.currentIndex].content}`
  }

  getCurrentSliderAutor() {
    return `${this.slides[this.currentIndex].autor}`
  }

  getCurrentSliderEmpresa() {
    return `${this.slides[this.currentIndex].empresa}`
  }

  updateActiveDotIndex() {
    this.activeDotIndex = this.currentIndex;
  }
}