import { createAction, props } from "@ngrx/store";

export const create = createAction(
    '[TODO] Create Todo',
    props<{ text: string }>()
);
export const toggleTodo = createAction(
    '[TODO] toggle todo',
    props<{ id: number }>()
);
export const editar = createAction(
    '[TODO] editar todo',
    props<{ id: number, text: string }>()
);
export const borrar = createAction(
    '[TODO] borrar todo',
    props<{ id: number }>()
);
export const toggleAll = createAction(
    '[TODO] toggle all todo',
    props<{ completado: boolean }>()
);
export const limpiarCompletados = createAction(
    '[TODO] limpiar completados'
);