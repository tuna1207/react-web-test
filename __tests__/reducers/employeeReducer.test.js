import configureStore from 'redux-mock-store'
import { data } from '../../src/services/FakeData'
import EmployeeRedux from '../../src/redux/Employee/EmployeeRedux'
import { remove } from 'ramda'

const mockStore = configureStore()
const store = mockStore()

const employeeReducer = EmployeeRedux.reducerMap[EmployeeRedux.stateKey]

describe('Employee Reducer', () => {

  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' }
      const initialState = {
        listEmployees: data
      }

      expect(employeeReducer(undefined, action)).toEqual(initialState)
    })
  })

  describe('create new client', () => {
    test('returns the correct state', () => {
      const action = { type: EmployeeRedux.Types.CREATE_NEW_CLIENT }
      const expectedState = {
        listEmployees: [
          ...data,
          {
            name: '',
            key: 'password',
            dateCreated: '',
            isNewAdd: true
          }
        ]
      }

      expect(employeeReducer(undefined, action)).toEqual(expectedState)
    })
  })

  describe('save new client', () => {
    test('returns the correct state', () => {
      const action = {
        client: {
          name: 'test',
          key: 'test',
          dateCreated: 'today'
        },
        idx: data.length,
        type: EmployeeRedux.Types.ON_SAVE_NEW_CLIENT
      }
      const expectedState = {
        listEmployees: [
          ...data,
          {
            name: 'test',
            key: 'test',
            dateCreated: 'today'
          }
        ]
      }

      expect(employeeReducer(undefined, action)).toEqual(expectedState)
    })
  })

  describe('delete client', () => {
    test('returns the correct state', () => {
      const action = {
        idx: data.length - 1,
        type: EmployeeRedux.Types.ON_DELETE_CLIENT
      }
      const expectedState = {
        listEmployees: remove(data.length - 1, data.length, data)
      }

      expect(employeeReducer(undefined, action)).toEqual(expectedState)
    })
  })

})
