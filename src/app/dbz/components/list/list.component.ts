import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
    public characterList: Character[] = [
      {
        id: '',
        name: 'Trunks',
        power: 10
      }
    ]

    deleteCharacter(id?: string): void {
      if( !id ) return;

      this.onDeleteCharacter.emit(id);
    }
}
