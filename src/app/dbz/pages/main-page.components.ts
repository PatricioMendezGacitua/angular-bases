import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  constructor(private DbzService: DbzService){}

  get Characters(): Character[] {
    return [...this.DbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.DbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character): void {
    this.DbzService.addCharacter( character );
  }

}
