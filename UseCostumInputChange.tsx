import React,{useReducer} from 'react'

export  enum ActionTypes {
    HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'
}

const UseCostumInputChange = ({ type, payload }: { type: ActionTypes, payload: any }) => {
    const reducer = (state: { value: number, name: string }, action: { type: 'HANDLE_INPUT_CHANGE', payload: any }) => {
        switch (action.type) {
            case 'HANDLE_INPUT_CHANGE':
                return { ...state, ...[action.payload] }
            default:
                return state
        }
    }

    const [{ value, name }, dispach] = useReducer(reducer, { value: 0, name: '' });
    return dispach({ type: 'HANDLE_INPUT_CHANGE', payload: { name, value } })
}

export default UseCostumInputChange;