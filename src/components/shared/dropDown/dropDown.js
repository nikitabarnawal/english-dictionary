import { forwardRef } from 'react'
import React from 'react'
import { dropdownData } from '../../../utils/dropDownData'
import './dropDown.scss'

const DropDown = forwardRef((props, ref) => {
  return (
    <div className="dropdown-content" ref={ref}>
      {dropdownData.map((data) => (
        <div key={data} onClick={() => props.handleDropdown(data)}>
          {data}
        </div>
      ))}
    </div>
  )
})

export default DropDown
