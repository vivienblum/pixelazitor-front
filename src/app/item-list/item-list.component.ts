import { Component, OnInit, Input } from "@angular/core"
import { Item } from "../models/item"
import { MatListModule } from "@angular/material/list"
import { Observable } from "rxjs"
import { environment } from "../../environments/environment"
import { MatDividerModule } from "@angular/material/divider"

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.scss"]
})
export class ItemListComponent implements OnInit {
  private _item: Item
  private _complete: boolean = false

  constructor() {}

  ngOnInit() {}

  @Input()
  set item(item: Item) {
    this._item = item
  }

  get item(): Item {
    return this._item
  }

  get complete(): boolean {
    return this._complete
  }

  handleCompleteChange() {
    if(confirm(`Have you collected all the ${this._item.name} items?`)) {
      this._complete = true
    }
  }
}
