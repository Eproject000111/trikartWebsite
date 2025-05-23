import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  images = [
    '.../../../../../../assets/img/cat-1.jpg',
    '.../../../../../../assets/img/cat-1.jpg',
    '.../../../../../../assets/img/cat-1.jpg',
    '.../../../../../../assets/img/cat-1.jpg',
    '.../../../../../../assets/img/cat-1.jpg'
  ];
  selectedIndex = 0;

  @ViewChild('thumbnailList') thumbnailList!: ElementRef;

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  scrollUp() {
    this.thumbnailList.nativeElement.scrollTop -= 100;
  }

  scrollDown() {
    this.thumbnailList.nativeElement.scrollTop += 100;
  }

}
