import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styles: ``,
})
export default class AboutPageComponent implements OnInit {
  // SSR SERVICES
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About');
    this.meta.updateTag({
      name: 'description',
      content: 'Esta es mi pagina de about',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Esta es mi pagina de about',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'bryan ochoa,Angular,Pro,v19',
    });
  }
}
