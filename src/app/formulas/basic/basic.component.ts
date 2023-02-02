import { Component, Input, OnInit } from '@angular/core';
import { CeNode } from 'src/app/models/CeNode';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  operator: string = '';
  constructor() {
    // Intended
   }

  @Input() basico: CeNode | undefined;

  ngOnInit(): void {
    switch (this.basico?.type) {
      case 'ADDITION':
        this.operator = '+';
        break;
      case 'SUBTRACTION':
        this.operator = '-';
        break;
      case 'MULTIPLICATION':
        this.operator = '*';
        break;
      case 'DIVISION':
        this.operator = '/';
        break;

      default:
        break;
    }



  }

}
