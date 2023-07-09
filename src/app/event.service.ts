import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Termin } from './termin.model';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Termin[]>{
    return this.http.get<Termin[]>('http://localhost:3000/');
  }

  joinEvent(eventId: any){
    return this.http.post('/api/events/join', {eventId});
  }

  createEvent(event: any){
    return this.http.post('/api/events', event);
  }

  editEvent(eventId: any, event: any){
    return this.http.put(`/api/events/${eventId}`, event);
  }

  cancelEvent(eventId: any){
    return this.http.delete(`/api/events/${eventId}`);
  }

}
