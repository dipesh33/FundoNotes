export const GridView = () => {
    return {
        type: 'GRID_VIEW',
    };
};

export const setUserId = (uid) => {
    return {
        type: 'SET_UID',
        payload: uid,
    };
};

export const setLabelData = (labelData) => {
    return {
        type: 'SET_LABEL_DATA',
        payload: labelData,
    };
};
