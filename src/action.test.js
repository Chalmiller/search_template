import * as action from './action';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING } from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', () => {
    const text = 'woooo'
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(action.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
    const store = mockStore();
    const actions = store.getActions();
    store.dispatch(action.requestRobots());
    
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(actions[0]).toEqual(expectedAction);
})