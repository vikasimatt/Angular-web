import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/PaymentDetailService';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
  }

}
