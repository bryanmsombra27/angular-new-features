import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styles: ``,
})
export default class ContactComponent implements OnInit {
  // SSR SERVICES
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact');
    this.meta.updateTag({
      name: 'description',
      content: 'Esta es mi pagina de contacto',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Esta es mi pagina de contacto',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'pagina sobre contacto hecha en Angular con SSR, Angular v19,Angular Pro',
    });
  }
}
