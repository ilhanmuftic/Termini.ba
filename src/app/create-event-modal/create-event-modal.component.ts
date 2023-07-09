import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.scss']
})
export class CreateEventModalComponent {
  @Input() createEventModalOpen: boolean = false;
}
