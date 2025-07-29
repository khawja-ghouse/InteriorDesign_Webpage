import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InteriorDesignerPage';

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
