import { createReducer, on } from '@ngrx/store';
import { borrar, create, editar, limpiarCompletados, toggleAll, toggleTodo } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState: Todo[] = [
    new Todo("Salvar al Mundo"),
    new Todo("MAtar a Iron man"),
    new Todo("Matar a Romanof"),
    new Todo("Salvar a Scarlet Witch"),
];

const _todoReducer = createReducer(
    initialState,
    on(create, (state, { text }) => [...state, new Todo(text)]),
    on(toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),
    on(editar, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: text
                }
            } else {
                return todo;
            }
        });

    }),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggleAll, (state, { completado }) => state.map(todo => {
        return {
            ...todo,
            completado: completado
        }
    })),
    on(limpiarCompletados, state => state.filter(todo => !todo.completado)),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}