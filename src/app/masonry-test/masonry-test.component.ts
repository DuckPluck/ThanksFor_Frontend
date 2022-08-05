import { Component, OnInit } from '@angular/core';
import { ServerInteractionService, Table } from '../service/server-interaction.service';

@Component({
  selector: 'app-masonry-test',
  templateUrl: './masonry-test.component.html',
  styleUrls: ['./masonry-test.component.scss']
})
export class MasonryTestComponent implements OnInit {
  table: Table[] = []
  error = ''
  tableId = 0

  constructor(private serverInteractionService: ServerInteractionService) { }

  ngOnInit(): void {
    this.fetchTable()
    
  }
  fetchTable() {
    this.serverInteractionService.fetchTable()
    .subscribe((response: Table[]) => {
      this.table = response
    }, (error: { message: string; }) => {
      this.error = error.message
    })
  }


  testResponse(testVar: any) {
    console.log(testVar)
    console.log(testVar[this.tableId].stickers)
    return 0
  }

  nextTable() {
    this.tableId += 1;
    this.fetchTable()
    console.log('Current table id: ', this.tableId)
    return 0
  }

  previousTable() {
    this.tableId -= 1;
    this.fetchTable()
    console.log('Current table id: ', this.tableId)
    return 0
  }
}
