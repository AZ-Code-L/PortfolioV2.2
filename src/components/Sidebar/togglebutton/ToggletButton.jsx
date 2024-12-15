import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ToggleButton = ({setOpen}) => {
  return (

  <button className="active" onClick={()=>setOpen(prev=>!prev)}><FontAwesomeIcon icon={faBars} /></button>

  )
}

export default ToggleButton