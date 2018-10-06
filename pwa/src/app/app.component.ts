import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private swUpdate: SwUpdate){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    
    //Check if Service Worker is available for the browser
    if (this.swUpdate.isEnabled) {
      //Check if exist a new version of services worker
      this.swUpdate.available.subscribe(()=>{
        //refresh the page
        window.location.reload();
      });
    }
    
  }

}
