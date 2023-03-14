import Loading from '../../../images/loader-regular.svg'
import './loader.scss'

const Loader = () => (
  <div className="loader">
    <img src={Loading} alt="loader" aria-hidden="true" />
  </div>
)

export default Loader
