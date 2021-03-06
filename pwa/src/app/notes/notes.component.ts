import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  panelOpenState = false;

  categories= [
    {value: 'Job', viewValue: 'Job'},
    {value: 'Personal', viewValue: 'Personal'},
    {value: 'Hobbie', viewValue: 'Hobbie'}
  ];

  note:any = {};
  notes: any = [];

  constructor(private swUpdate: SwUpdate,
    private noteService: NoteService,
    private snackBar: MatSnackBar) {
    this.noteService.getNotes()
      .subscribe((fbNotes) => {
        this.notes = fbNotes.reverse(),
          console.log(fbNotes)
      }, (error) => {
        console.log(error)
      })

  }



  ngOnInit(): void {

    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    // Check if Service Worker is available for the browser
    if (this.swUpdate.isEnabled) {
      // Check if exist a new version of services worker
      this.swUpdate.available.subscribe(() => {
        // refresh the page
        window.location.reload();
      });
    }

  }


  /**
   * Save the Note
   */
  saveNote(){
    console.log(this.note)    
    this.noteService.createNote(this.note)
      .then((result)=>{
        this.snackBar.open("Successful!", null, {
          duration: 2000,
        });
        this.note={};
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  /**
   * Show the information in the fields 
   * of create note for can edit the note
   * @param note 
   */
  selectNote(note){
    this.note = note;
  }
}
