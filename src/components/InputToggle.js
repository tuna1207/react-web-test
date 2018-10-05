import { compose as recompose, withHandlers, withState } from 'recompose'
import React from 'react'

const InputToggle = ({ isToggle, onHideToogle, onShowToogle, value }) => (
  <div>
    <input disabled className='input-key' type={isToggle ? 'text' : 'password'} value={value} />
    {
      isToggle
        ? <i className='fa fa-eye-slash icon-toggle' onClick={onHideToogle} />
        : <i className='fa fa-eye icon-toggle' onClick={onShowToogle} />
    }
  </div>
)

export default recompose(
  withState('isToggle', 'setIsToggle', false),
  withHandlers({
    onHideToogle: (props) => () => {
      props.setIsToggle(false)
    },
    onShowToogle: (props) => () => {
      props.setIsToggle(true)
    }
  })
)(InputToggle)
