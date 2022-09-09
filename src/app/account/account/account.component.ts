import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent } from 'ngx-masonry';
import { ServerInteractionService, Table } from 'src/app/service/server-interaction.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @ViewChild(NgxMasonryComponent)
  masonry!: NgxMasonryComponent;
  
  table: Table[] = []
  error = ''
  tableId = 0

  constructor(private serverInteractionService: ServerInteractionService) { }

  ngOnInit(): void {
    this.fetchTable()
    
  }
  fetchTable():void {
    this.serverInteractionService.fetchTable()
        .subscribe((response: Table[]) => {
          this.table = response
        }, (error: { message: string; }) => {
          this.error = error.message
    })
  }


  testResponse(testVar: any) {
    console.log('Total tables: ')
    console.log(testVar)
    console.log(this.tableId + ' = id; Current table: ')
    console.log(testVar[this.tableId].stickers)
    return 0
  }

  nextTable():void {
    this.tableId += 1
    this.fetchTable()
    setTimeout(() => {               // таймаут это костыль, нужно завязать релоад масонри на хуке подгрузки эл-тов, чтобы не было ошибок верстки при проблемах с сервером
      this.masonry.reloadItems()
      this.masonry.layout()
      console.log('Current table id: ', this.tableId)
    }, 1)

    
  }

  previousTable(): void {
    this.tableId -= 1;
    this.fetchTable()
    setTimeout(() => {
      this.masonry.reloadItems()
      this.masonry.layout()
      console.log('Current table id: ', this.tableId)
    }, 1)
    
  }
}
