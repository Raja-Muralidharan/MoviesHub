import { actorCreationDTO } from './../actors.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(actorCreationDTO: actorCreationDTO)
  {
   console.log(actorCreationDTO);
  }

}
