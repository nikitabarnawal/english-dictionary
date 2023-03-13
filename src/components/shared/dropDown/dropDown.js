import { forwardRef, useContext } from 'react'
import React from 'react'
import { dropdownData } from '../../../utils/dropDownData'
import ThemeContext from '../../themeContext/themeContext'
import './dropDown.scss'

const DropDown = forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`dropdown-content ${theme}`} ref={ref}>
      {dropdownData.map(({ key, value }) => (
        <div
          key={key}
          className={key}
          onClick={() => props.handleDropdown(value)}
        >
          {value}
        </div>
      ))}
    </div>
  )
})

export default DropDown
