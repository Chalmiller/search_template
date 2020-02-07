import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    CHANGE_SEARCH_FIELD 
} from "./constants";

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    }) 

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    }) 
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({"error": "", "isPending": true, "robots": []})
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: "test",
                email: 'test@gmail.com'
            }]
        })).toEqual(
            {
                "error": "", 
                "isPending": false, 
                "robots": [
                    {
                        id: '123',
                        name: "test",
                        email: 'test@gmail.com'
                    }
                ]
            }
        )
    })
})