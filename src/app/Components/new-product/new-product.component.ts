import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  customerForm: FormGroup;
  title: string = "Add";
  id: number = 0;
  errorMessage: any;
  submitted: boolean = false;
  _ref:any;
  constructor(
    private _fb: FormBuilder, 
    private _avRoute: ActivatedRoute,
    private _customerService: ProductService,
    private _router: Router
  ) { 
    if(this._avRoute.snapshot.params["id"]){
      this.id = parseInt( this._avRoute.snapshot.params["id"]);
      console.log(this.id);
        this.title = 'Edit';
    }
    this.customerForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.pattern("[1-9][0-9]{9}")]],
      image:''
    })

  }

  ngOnInit() {
    if(this.id > 0){
      this._customerService.getCustomerById(this.id)
        .subscribe(resp => this.customerForm.setValue(resp)
                 , error => this.errorMessage = error);
        
  }
  }

}
