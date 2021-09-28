import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GridDataState } from './grid-data.reducer';

const gridDataFeature = createFeatureSelector<GridDataState>('gridDataReducer');

export const SelectionType = createSelector(gridDataFeature, (state: GridDataState) => state.selectionType);
