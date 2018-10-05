import configureStore from 'redux-mock-store'
import EmployeeRedux from '../../src/redux/Employee/EmployeeRedux'

const mockStore = configureStore()
const store = mockStore()

describe('Employee Actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions()
  })

  describe('create new client', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: EmployeeRedux.Types.CREATE_NEW_CLIENT
        }
      ]

      store.dispatch(EmployeeRedux.Creators.createNewClient())
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('save new client', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          client: {
            name: 'test',
            key: 'test',
            dateCreated: 'today'
          },
          idx: 1,
          type: EmployeeRedux.Types.ON_SAVE_NEW_CLIENT
        }
      ]

      store.dispatch(EmployeeRedux.Creators.onSaveNewClient(
        {
          name: 'test',
          key: 'test',
          dateCreated: 'today'
        },
        1
      ))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('delete client', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          idx: 1,
          type: EmployeeRedux.Types.ON_DELETE_CLIENT
        }
      ]

      store.dispatch(EmployeeRedux.Creators.onDeleteClient(1))
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
