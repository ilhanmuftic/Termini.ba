import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Termin } from '../termin.model'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Termin[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
    .subscribe(events => this.events = events);
  }

}
