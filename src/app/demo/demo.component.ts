import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
    @Output() public MyEvent = new EventEmitter();

    public SendEvent()
    {
      this.MyEvent.emit("Hello From Child");
    }
}
