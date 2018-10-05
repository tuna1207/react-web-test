import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
// import { compose as recompose, withHandlers, withState } from 'recompose'
import React from 'react'

const HeaderNavBar = ({ onShowContent, onSetTextContent }) => (
  <div className='sidebar-content'>
    <Navbar expand='md'>
      <Nav navbar>
        <NavItem>
          <i className='fa fa-key icon-sidebar' />
          <button onClick={onShowContent} className='btn-sidebar'>{`Keys`}</button>
        </NavItem>
        <NavItem>
          <i className='fa fa-file icon-sidebar' />
          <button onClick={onSetTextContent} className='btn-sidebar'>{`Log`}</button>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default HeaderNavBar
