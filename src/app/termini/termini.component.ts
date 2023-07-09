import { Component } from '@angular/core';

@Component({
  selector: 'app-termini',
  templateUrl: './termini.component.html',
  styleUrls: ['./termini.component.scss']
})
export class TerminiComponent {
  createEventModalOpen = false;

  openCreateEventModal() {
    this.createEventModalOpen = true;
  }
  closeCreateEventModal() {
    this.createEventModalOpen = false;
  }
}
