import { Component, OnInit } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  images = [
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-1.jpg', alt: 'Wardrobe Image 1' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-2.jpg', alt: 'Wardrobe Image 2' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-3.jpg', alt: 'Wardrobe Image 3' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-4.jpg', alt: 'Wardrobe Image 4' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-5.jpg', alt: 'Wardrobe Image 5' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-6.jpg', alt: 'Wardrobe Image 6' }
  ];

   // Images for each section
   wardrobeImages = [
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-1.jpg', alt: 'Wardrobe Image 1' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-2.jpg', alt: 'Wardrobe Image 2' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-3.jpg', alt: 'Wardrobe Image 3' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-4.jpg', alt: 'Wardrobe Image 4' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-5.jpg', alt: 'Wardrobe Image 5' },
    { src: '../../../assets/Bedroom/Walldrobe/walldrobe-6.jpg', alt: 'Wardrobe Image 6' }
  ];

  cotImages = [
    { src: '../../../assets/Bedroom/cort/cort-1.jpg', alt: 'Wardrobe Image 1' },
    { src: '../../../assets/Bedroom/cort/cort-2.jpg', alt: 'Wardrobe Image 2' },
    { src: '../../../assets/Bedroom/cort/cort-3.jpg', alt: 'Wardrobe Image 3' },
    { src: '../../../assets/Bedroom/cort/cort-4.jpg', alt: 'Wardrobe Image 4' },
    { src: '../../../assets/Bedroom/cort/cort-5.jpg', alt: 'Wardrobe Image 5' },
    { src: '../../../assets/Bedroom/cort/cort-6.jpg', alt: 'Wardrobe Image 6' }
  ];

  studyTableImages = [
    { src: '../../../assets/Bedroom/StudyTable/studytable-1.jpg', alt: 'Study Table Image 1' },
    { src: '../../../assets/Bedroom/StudyTable/studytable-2.jpg', alt: 'Study Table Image 2' },
    { src: '../../../assets/Bedroom/StudyTable/studytable-3.jpg', alt: 'Study Table Image 3' },
    { src: '../../../assets/Bedroom/StudyTable/studytable-4.jpg', alt: 'Study Table Image 4' },
    { src: '../../../assets/Bedroom/StudyTable/studytable-5.jpg', alt: 'Study Table Image 5' },
    { src: '../../../assets/Bedroom/StudyTable/studytable-6.jpg', alt: 'Study Table Image 6' }
  ];

  // Visible images for each section
  visibleWardrobeImages:Image[] = [];
  visibleCotImages:Image[] = [];
  visibleStudyTableImages:Image[] = [];

  // Current index for each section
  wardrobeIndex = 0;
  cotIndex = 0;
  studyTableIndex = 0;

  imagesPerPage = 3;

  constructor() {}

  ngOnInit(): void {
    this.updateVisibleImages('wardrobe');
    this.updateVisibleImages('cot');
    this.updateVisibleImages('studyTable');
  }

  updateVisibleImages(section: string) {
    if (section === 'wardrobe') {
      this.visibleWardrobeImages = this.wardrobeImages.slice(this.wardrobeIndex, this.wardrobeIndex + this.imagesPerPage);
    } else if (section === 'cot') {
      this.visibleCotImages = this.cotImages.slice(this.cotIndex, this.cotIndex + this.imagesPerPage);
    } else if (section === 'studyTable') {
      this.visibleStudyTableImages = this.studyTableImages.slice(this.studyTableIndex, this.studyTableIndex + this.imagesPerPage);
    }
  }

  nextSlide(section: string) {
    if (section === 'wardrobe' && this.wardrobeIndex + this.imagesPerPage < this.wardrobeImages.length) {
      this.wardrobeIndex += this.imagesPerPage;
      this.updateVisibleImages('wardrobe');
    } else if (section === 'cot' && this.cotIndex + this.imagesPerPage < this.cotImages.length) {
      this.cotIndex += this.imagesPerPage;
      this.updateVisibleImages('cot');
    } else if (section === 'studyTable' && this.studyTableIndex + this.imagesPerPage < this.studyTableImages.length) {
      this.studyTableIndex += this.imagesPerPage;
      this.updateVisibleImages('studyTable');
    }
  }

  prevSlide(section: string) {
    if (section === 'wardrobe' && this.wardrobeIndex - this.imagesPerPage >= 0) {
      this.wardrobeIndex -= this.imagesPerPage;
      this.updateVisibleImages('wardrobe');
    } else if (section === 'cot' && this.cotIndex - this.imagesPerPage >= 0) {
      this.cotIndex -= this.imagesPerPage;
      this.updateVisibleImages('cot');
    } else if (section === 'studyTable' && this.studyTableIndex - this.imagesPerPage >= 0) {
      this.studyTableIndex -= this.imagesPerPage;
      this.updateVisibleImages('studyTable');
    }
  }

}
