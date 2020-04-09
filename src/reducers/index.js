import { INITIAL_STATE } from '../contexts'
import TYPES from '../actionTypes'

// Helpers
import { handleUpdateAlterations } from '../helpers/alterations'

type State = {
  customer: Object,
  alterations: Array,
}

type Action = {
  type: string,
  error: string,
  data: Object<{
    locations: Array,
    cities: Array,
  }>,
  currentPage: number,
  dataType: string,
  offset: string,
}

const reducer = (state: State = INITIAL_STATE, action: Action) => {
  const { type } = action

  switch (type) {
    case TYPES.HANDLE_GET_ORDER_REQUEST:
      return {
        ...state,
        type,
        customer: action.customer,
      }

    // TODO: mocking data
    case TYPES.HANDLE_GET_ORDER_SUCCESS:
      return {
        ...state,
        alterations: action.data,
        type,
      }

    case TYPES.HANDLE_GET_ORDER_FAILED:
      return {
        ...state,
        type,
      }

    case TYPES.HANDLE_SELECT_ALTERATION:
      return {
        ...state,
        alterations: handleUpdateAlterations(state.alterations, action.data),
        type,
      }

    case TYPES.HANDLE_SELECT_FITTING_OPTIONS:
      return {
        ...state,
        type,
        fittingOption: action.value,
      }

    default:
      return state
  }
}

export default reducer
