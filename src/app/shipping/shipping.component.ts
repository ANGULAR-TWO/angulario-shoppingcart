import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts:any;
  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
    let result =this.cartService.getShippingPrice();
    result.subscribe((data)=>this.shippingCosts=data);
  }

}
