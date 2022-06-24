export const addList = title => {
    return {
        type: 'ADD_LIST',
        payload: title
    };
};
export const addCard = (listID, text) => {
    return {
        type: 'ADD_CARD',
        payload: {text, listID}
    };
};