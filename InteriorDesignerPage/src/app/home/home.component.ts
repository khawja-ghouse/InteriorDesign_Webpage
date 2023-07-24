import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isScrolled: boolean = false;
  shouldBeVisible: boolean = true;

  @HostListener('window:scroll')
  onWindowScroll() {
    if(window.pageYOffset > 100 && window.pageYOffset < 250){
      const elementToRemove = this.elementRef.nativeElement.querySelector('#menuBlock');
      this.renderer.removeChild(elementToRemove.parentNode, elementToRemove);
      this.shouldBeVisible = false;
    }else{
      this.shouldBeVisible = true;
    }
    this.isScrolled = window.pageYOffset > 250;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

}
