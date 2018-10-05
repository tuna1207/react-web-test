import { lifecycle, compose as recompose, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'
import { EmployeeRedux } from '../redux/reducers'
import React from 'react'
import { InputToggle, Sidebar } from '../components'
import { Table } from 'reactstrap'

const Home = ({ listEmployees, isToggle, onToogleKey, onAddNew, onDeleteEmpl, onSave, onChangeName, onChangeKey, isShowContent, onShowContent, textContent, onSetTextContent }) => (
  <div className='home-page'>
    <div className='container-fuild'>
      <div className='row'>
        <div className='col-md-2'>
          <Sidebar onSetTextContent={onSetTextContent} onShowContent={onShowContent} />
        </div>
        <div className='col-md-10'>
          {
            isShowContent
              ? (
                <div>
                  <div className='content-title'>
                    <i className='fa fa-cog icon-sidebar fa-2x mr-2' />
                    <h6 className='mb-0'>{`There API KeyId grant developers the ability to access electrica services in the Cloud. Keep Them ...`}</h6>
                  </div>
                  <div className='wrapper-table'>
                    <Table>
                      <thead>
                        <tr>
                          <th>{`Name`}</th>
                          <th>{`Key`}</th>
                          <th>{`Date Created`}</th>
                          <th>{`Action`}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listEmployees.length > 0 && listEmployees.map((empl, idx) => (
                            <tr key={`key-${idx}`}>
                              <td>{
                                empl.isNewAdd
                                  ? <input className='input-new-text' placeholder='Enter name' onChange={onChangeName} />
                                  : <span>{empl.name || '---'}</span>}
                              </td>
                              <td>
                                {
                                  empl.isNewAdd
                                    ? <input className='input-new-text' placeholder='Enter key' onChange={onChangeKey} />
                                    : <InputToggle value={empl.key} />
                                }
                              </td>
                              <td>{empl.dateCreated || '---'}</td>
                              <td>
                                {
                                  empl.isNewAdd
                                    ? <button className='btn-save' onClick={() => {onSave(idx)}}>{`Save`}</button>
                                    : (
                                      <div className='options-active'>
                                        <button className='btn-refresh'>{`Refresh`}</button>
                                        <button className='btn-delete' onClick={() => {onDeleteEmpl(idx)}}>{`Delete`}</button>
                                      </div>
                                    )
                                }
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                    <div className='wrapper-btn-add'>
                      <button className='btn-add-new' onClick={onAddNew}>{`New`}</button>
                    </div>
                  </div>
                </div>
              )
              : (
                <div className='show-text'>
                  <h3 style={{ padding: 30 }}>{textContent}</h3>
                </div>
              )
          }
        </div>
      </div>
    </div>
  </div>
)

export default recompose(
  connect(
    (state) => {
      const { listEmployees } = EmployeeRedux.getReducerState(state)
      return {
        listEmployees
      }
    },
    (dispatch) => ({
      onDelete: (idx) => (dispatch(EmployeeRedux.Creators.onDeleteClient(idx))),
      onCreate: () => (dispatch(EmployeeRedux.Creators.createNewClient())),
      onSaveClient: (client, idx) => (dispatch(EmployeeRedux.Creators.onSaveNewClient(client, idx)))
    })
  ),
  withState('addName', 'setAddname', ''),
  withState('addKey', 'setAddKey', ''),
  withState('isToggle', 'setIsToggle', false),
  withState('isShowContent', 'setIsShowContent', false),
  withState('textContent', 'setTextContent', ''),
  withHandlers({
    onToogleKey: (props) => () => {
      props.setIsToggle(true)
    },
    onAddNew: (props) => () => {
      props.onCreate()
    },
    onChangeName: (props) => (e) => {
      props.setAddname(e.target.value)
    },
    onChangeKey: (props) => (e) => {
      props.setAddKey(e.target.value)
    },
    onDeleteEmpl: (props) => (idx) => {
      props.onDelete(idx)
    },
    onSave: (props) => (idx) => {
      props.onSaveClient(
        {
          name: props.addName,
          key: props.addKey,
          date: '2018-02-19'
        },
        idx
      )
    },
    onShowContent: (props) => () => {
      props.setIsShowContent(true)
    },
    onSetTextContent: (props) => () => {
      props.setIsShowContent(false)
      props.setTextContent('Logs')
    }
  }),
  lifecycle({
    componentDidMount () {
    }
  })
)(Home)
