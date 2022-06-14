import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Output() reload = new EventEmitter();
  @Input() errorTitle: any;
  constructor() { }

  ngOnInit(): void {
  }

}
