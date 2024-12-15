import Links from "./links/Links"
import {motion} from "framer-motion"
import ToggleButton from "./togglebutton/Toggletbutton"
import "./sidebar.scss"
import { useState } from "react"

const Sidebar = () => {

    const[open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 50,
                damping:20
            }
        },
        closed: {
            clipPath: "circle(0px at 0px 0px",
            transition: {
                delay:0.5,
                type:"spring",
                stiffness: 400,
                damping:40
            }
        }
    }

    return (
        <motion.div className="sidebar" animate={open ? "open" :"closed"}>
            <motion.iv className="bg" variants={variants}>
                <Links />
            </motion.iv>
        
            <ToggleButton setOpen={setOpen} />  
        </motion.div>
    )
}

export default Sidebar
