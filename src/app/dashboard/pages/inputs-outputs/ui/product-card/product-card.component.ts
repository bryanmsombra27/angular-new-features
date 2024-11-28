import { Component, input, output } from '@angular/core';
import { Product } from '../../../../../interfaces/Product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  // nueva forma de declarar los @Inputs
  product = input.required<Product>();

  // nueva forma de declarar los @Outputs
  onIncrementQuantity = output<number>();

  incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}
