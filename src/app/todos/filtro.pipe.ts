import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoListComponent } from './todo-list/todo-list.component';

@Pipe({
  name: 'filtroTodos'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: string): Todo[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
