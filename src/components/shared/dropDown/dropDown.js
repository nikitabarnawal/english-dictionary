import { forwardRef } from 'react'
import React from 'react'
import { dropdownData } from '../../../utils/dropDownData'
import './dropDown.scss'

const DropDown = forwardRef((props, ref) => {
  return (
    <div className="dropdown-content" ref={ref}>
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
