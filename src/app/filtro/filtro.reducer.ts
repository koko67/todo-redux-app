import { createReducer, on } from "@ngrx/store";
import * as filtroActions from "./filtro.actions";


export const initialState: filtroActions.filtrosValidos = 'todos';

const _filtroReducer = createReducer(initialState,
    on(filtroActions.setFiltro, (state, { filtro }) => filtro),

);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}