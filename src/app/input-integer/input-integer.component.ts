import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad:number;
  
  @Input()
  max:number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  upQuantity(): void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else  
      this.maxReached.emit("Cantidad maxima de stock alcanzada")
  }
  downQuantity(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  onChangeQuantity(event): void{
    if (event.target.value > this.max){
      this.maxReached.emit('No disponemos de suficiente stock');
      this.cantidad = this.max;
      this.cantidadChange.emit(this.cantidad);
    }
  }
}
