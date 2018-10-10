import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NoteService } from './services/note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  panelOpenState = false;

  categories= [
    {value: 'Job', viewValue: 'Job'},
    {value: 'Personal', viewValue: 'Personal'},
    {value: 'Hobbie', viewValue: 'Hobbie'}
  ];

  note:any = {};

  constructor(private swUpdate: SwUpdate,
   private noteService: NoteService) {
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
        alert("Successful!")
        this.note={};
    })
    .catch((error)=>{
      console.log(error)
    })
  }


}
