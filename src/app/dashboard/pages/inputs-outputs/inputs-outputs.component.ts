import { Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces/Product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-inputs-outputs',
  imports: [ProductCardComponent],
  templateUrl: './inputs-outputs.component.html',
  styles: ``,
})
export default class InputsOutputsComponent implements OnDestroy {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 3,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 6,
    },
  ]);

  private internalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            quantity: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe();

  ngOnDestroy(): void {
    this.internalSubscription.unsubscribe();
  }

  updateProduct(product: Product, quantity: number) {
    this.products.update((products) => {
      return products.map((item) => {
        if (item.id == product.id) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      });
    });
  }
}
