import {
    createAction,
    Action
} from 'redux-actions';

export const PAGE_ACTIONS = {
    TOGGLE_SIDE_NAV: "TOGGLE_SIDE_NAV"
};

export const toggleSideNave =
    createAction<IDictionary<string>>(PAGE_ACTIONS.TOGGLE_SIDE_NAV, (pageId: string) => {
        return {
            pageId: pageId
        }
    });
    
export const pageActions = {
    toggleSideNave
};