import { Component } from '@angular/core';
import {DataGeneratorService, Person} from "../shared/index";

@Component({
  moduleId: module.id,
  selector: 'sd-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css'],
  directives: []
})
export class TableComponent {

  myList: Person[] = [];

  constructor(public dataGeneratorService: DataGeneratorService) {
    this.myList = dataGeneratorService.createRowData(1000);
  }


  onAdd(count:number): void {
    this.myList.push.apply(this.myList, this.dataGeneratorService.createRowData(count));
  }

  onClear(): void {
    this.myList.length = 0;
  }

  onModify(): void {
    if (this.myList.length > 0) {
      let index = Math.round(Math.random() * 10) % this.myList.length;
      this.myList[index].name = "Pouet pouet";
    }
  }
}
