import {createSelector} from "reselect";

const selectDirectory = state => state.directory;

export const selectSection = createSelector(
    [selectDirectory],
    directory => directory.section
)