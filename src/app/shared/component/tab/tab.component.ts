import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  public skill: string = "javascript"
  constructor() { }

  ngOnInit(): void {
  }
  onClick(eve: Event) {
    let target = (eve.target as HTMLAnchorElement).getAttribute('data-id')!
    console.log(target)
    this.skill = target
  }

}


