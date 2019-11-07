import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = []
  checkoutForm: any;
  constructor(private cartService: CartServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItemsFromCart();
    this.checkoutForm = this.formBuilder.group({ name: '', address: '' })
  }

  onSubmit(formData: any) {
    window.alert('your order placed ' + JSON.stringify(formData));
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
