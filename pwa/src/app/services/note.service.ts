import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/notes/').valueChanges();
  }

  public getNotes() {
    return this.items;
    // return this.db.list('/notes/');
  }

  public getNote(id) {
    return this.db.object('/notes/' + id);
  }

  public createNote(note) {
    note.id=Date.now();
    return this.db.database.ref('/notes/' + note.id).set(note);
  }

  public editNote(note) {
    return this.db.database.ref('/notes/' + note.id).set(note);
  }

  public deleteNote(note) {
    return this.db.database.ref('notes').child(note.id).remove();
  }

}
