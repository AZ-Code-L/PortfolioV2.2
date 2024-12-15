import "./skills.scss"
import { color, motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss, faHtml5, faJava, faJs, faPhp, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import { text } from "@fortawesome/fontawesome-svg-core"

const Skills = () => {

    const slideVariants = {
    initial: {
        x: "-20%",
    },
    animate: {
        x: "-180%",
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration:5
        }
    }
    }
    
    const textVariants = {
    initial: {
        x: -500,
        opacity:0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

    return (
    <motion.div className="myskills">
        <motion.div className="skill-text-container" variants={textVariants} initial="initial" whileInView="animate">
                <h1>My Skills</h1>
                <p>
                    Hi, my name is Alex, and I am a passionate and dedicated programmer with a strong foundation in various kinds of languages, having recently graduated with a degree in Computer Engineering Technology from Technological University of the Philippines - Manila.
                </p>
                <motion.button whileHover={{scale:1.1}}>See My Projects</motion.button>
                <hr />
        </motion.div>
                
        <motion.div className="skill-box-container" variants={slideVariants}  initial="initial" animate="animate" > 
                <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    <h2>HTML</h2>
                </motion.div>
                <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faCss} color='#28A4D9'/>
                    <h2>CSS</h2>
                </motion.div>
                <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faJs} color='#EFD81D' />
                    <h2>JavaScript</h2>
                </motion.div>
                <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    <h2>React</h2>
                </motion.div>
                <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faSass} color='#b37399aa' />
                    <h2>SASS</h2>
                </motion.div>
                <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faPython}    />
                    <h2>Python</h2>
                </motion.div>
                 <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faPhp} color="black" />
                    <h2>Java</h2>
                </motion.div>
                <motion.div className="skill-box" whileHover={{scale:1.1}}>
                    <FontAwesomeIcon icon={faJava} color="#1FBED6" />
                    <h2>Java</h2>
                </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills
