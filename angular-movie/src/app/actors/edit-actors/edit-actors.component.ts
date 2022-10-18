import { actorCreationDTO, actorDto } from './../actors.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: actorDto = {name: 'Tom Holland', dateofBirth: new Date(), picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTez-ll614yJ1CxFsN7W2GafrYDXWz2cEtH8qkhhGog9w&s'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params['id']);
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO)
  {
    console.log(actorCreationDTO);
  }

}
