// Actions
import { INITIAL_STATE } from '../../contexts'
import TYPES from '../../actionTypes'

// Ruducer
import reducer from '../../reducers'

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should be call action HANDLE_GET_ORDER_REQUEST', () => {
    const startAction = {
      type: TYPES.HANDLE_GET_ORDER_REQUEST,
    }

    expect(reducer(INITIAL_STATE, startAction).type).toEqual(startAction.type)
  })

  it('should be call action HANDLE_GET_ORDER_SUCCESS', () => {
    const startAction = {
      type: TYPES.HANDLE_GET_ORDER_SUCCESS,
      data: [
        {
          id: 'garment-4',
          name: 'Victoria Blazer 4',
          imageUrl:
            'http://s7d2.scene7.com/is/image/DVF/13150DVFNNAVY_A1?$pdp-main$',
          alterations: [
            {
              id: 'garment-4-1',
              label: 'Alter Shoulders/Arms',
              isChecked: false,
              price: 120,
            },
          ],
        },
      ],
    }

    expect(reducer(INITIAL_STATE, startAction).type).toEqual(startAction.type)
  })

  it('should be call action HANDLE_GET_ORDER_FAILED', () => {
    const startAction = {
      type: TYPES.HANDLE_GET_ORDER_FAILED,
    }

    expect(reducer(INITIAL_STATE, startAction).type).toEqual(startAction.type)
  })

  it('should be call action HANDLE_SELECT_ALTERATION', () => {
    const startAction = {
      type: TYPES.HANDLE_SELECT_ALTERATION,
    }

    expect(reducer(INITIAL_STATE, startAction).type).toEqual(startAction.type)
  })

  it('should be call action HANDLE_SELECT_FITTING_OPTIONS', () => {
    const startAction = {
      type: TYPES.HANDLE_SELECT_FITTING_OPTIONS,
      value: 'appointment',
    }

    expect(reducer(INITIAL_STATE, startAction).fittingOption).toEqual(
      startAction.value
    )
  })
})
