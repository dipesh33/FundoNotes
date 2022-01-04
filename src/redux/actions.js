export const GridView = () => {
    return {
        type: 'GRID_VIEW',
    };
};

export const setLabelData = (labelData) => {
    return {
        type: 'SET_LABEL_DATA',
        payload: labelData,
    };
};
