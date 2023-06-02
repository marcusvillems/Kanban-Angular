import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDropList,
  DragDrop,
  CdkDropListGroup,
  DragDropConfig,
  DragRef,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  @ViewChild('doneList') doneList!: CdkDropList<string[]>;

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some random idea",
      "This is another one",
      "Build an awesome app"
    ]),
    new Column('Research', [
      "Lorem Ipsum",
      "food",
      "This was in the 'Research' column"
    ]),
    new Column('Todo', [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column('Done', [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ])
  ]);

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor(private dragDrop: DragDrop) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}



