import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product';
import { CartServiceService } from '../cart/cart-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  constructor(private route: ActivatedRoute, private cartService: CartServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = products[params.get('productId')];
    })
  }

  addToCart(product:any)
  {
    this.cartService.addProductToCart(product);
    window.alert('product added to the cart');
  }
}
