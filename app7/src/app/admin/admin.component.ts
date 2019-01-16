import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orderList = [];

  constructor(private OrderService: OrderService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.OrderService.getOrders()
      .subscribe(res => {
          this.orderList = res.order;
        },
        error => {
          console.log('error', error);
        });
  }


}
