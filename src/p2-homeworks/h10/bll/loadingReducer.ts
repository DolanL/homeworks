
const initialState = {
    isLoading: false
}

type LoadingACType = {
    type: string
    loading: boolean
}

export const loadingReducer = (state = initialState, action: LoadingACType): typeof initialState=> { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.loading}
        }
        default: return state
    }
}




export const loadingAC = (loading: boolean): LoadingACType => {
    return {type: "LOADING", loading}  as const
}