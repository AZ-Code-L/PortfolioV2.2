import { useRef } from "react"
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"


const Parallax = ({type}) => {
    const ref = useRef()
    
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start", "end start"]
    })
    
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const ytext = useTransform(scrollYProgress, [0,1], ["-5%", "20%"])
    return (
        <div className="parallax" style ={{background: type==="skills" ? "linear-gradient(180deg, #111132, #0c0c1d" : "linear-gradient(180deg, #0c0c1d, #111132" }}>
            <motion.h1 style={{y: yBg}}>{type === "skills" ? "What are my skill?" : "My Projects"}</motion.h1>
                <motion.div className="mountains"> </motion.div>
            <motion.div className="planets" style={{y: ytext, backgroundImage: `url(${type==="skills" ? "/planets.png" : "/sun.png"})`}}></motion.div>
                <motion.div className="stars" style={{x: ytext}}></motion.div>
        </div>
    )
}

export default Parallax
