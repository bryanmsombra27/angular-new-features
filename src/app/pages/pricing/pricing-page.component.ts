import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  styles: ``,
})
export default class PricingPageComponent implements OnInit {
  // SSR SERVICES
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // FUNCION PARA VERIFICAR SI NOS ENCONTRAMOS DEL LADO DEL CLIENTE, POR DEFECTO EL COMPONENTE ES CONSTRUIDO DEL LADO DEL SERVIDOR PARA POSTERIORMENTE SER EJECUTADO DEL LADO DEL CLIENTE
    // isPlatformBrowser(this.platform);
    this.title.setTitle('Pricing');

    this.meta.updateTag({
      name: 'description',
      content: 'Esta es mi pagina de precios',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Esta es mi pagina de precios',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'pagina sobre precios hecha en Angular con SSR, Angular v19,Angular Pro',
    });
  }
}
