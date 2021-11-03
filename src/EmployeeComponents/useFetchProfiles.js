import {useReducer, useEffect} from 'react'
import axios from 'axios'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

 //const BASE_URL = 'http://localhost:3000/profiles'
 const BASE_URL = 'https://ancient-refuge-63740.herokuapp.com/profiles';

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, profiles: []}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, profiles: action.payload.profiles}
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, profiles: []}
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return {
                ...state,
                hasNextPage: action.payload.hasNextPage,
                totalItemsReturned: action.payload.totalItemsReturned
            }
        default:
            return state
    }
}

export default function useFetchProfiles(params, page) {

    const [state, dispatch] = useReducer(reducer, {profiles: [], loading: true})

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source()
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: {_page: page, ...params}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {profiles: res.data}})
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        })

        const cancelToken2 = axios.CancelToken.source()
        axios.get(BASE_URL, {
            cancelToken: cancelToken2.token,
            params: {_page: page + 1, ...params}
        }).then(res => {
            dispatch({
                type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
                payload: {hasNextPage: res.data.length !== 0, totalItemsReturned: res.data.length}
            })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        })

        return () => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }
    }, [params, page])

    return state
}