import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { compose as recompose, withHandlers, withState } from 'recompose'
import React from 'react'

const HeaderNavBar = ({ isOpen, onShowDropdown }) => (
  <div className='header-nav-bar'>
    <Navbar expand='md'>
      <Nav navbar>
        <NavItem>
          <NavLink href='/'>{`Home`}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>{`Api Keys`}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>{`Stl Hub`}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>{`Monitor`}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>{`Notifications`}</NavLink>
        </NavItem>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            <span>{`electricaio`}</span>
            <div className='user-avatar'>
              <span>{`Avatar`}</span>
            </div>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              {`Profile`}
            </DropdownItem>
            <DropdownItem>
              {`Account`}
            </DropdownItem>
            <DropdownItem />
            <DropdownItem>
              {`Logout`}
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  </div>
)

export default recompose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    onShowDropdown: (props) => () => {
      props.setIsOpen(!props.isOpen)
    }
  })
)(HeaderNavBar)
