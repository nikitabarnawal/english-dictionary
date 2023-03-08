import { dropdownData } from '../../../utils/dropDownData'
import './dropDown.scss'

const DropDown = () => {
  return (
    <div className="dropdown-content">
      {dropdownData.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  )
}

export default DropDown
