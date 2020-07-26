import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor() { }

  ngOnInit() {
    if(this.item){
      this.isNewItem=false;
    }else{
      this.isNewItem=true;
      this.item=new BudgetItem('',null);
    }
  }

  onSubmit(form: NgForm){
    // console.log(form);
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
