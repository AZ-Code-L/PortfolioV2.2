import "./hero.scss"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-solid-svg-icons"
import { faCss, faGithub, faHtml5, faJava, faJs, faLinkedin, faPhp, faPython, faReact, faReddit, faSass } from "@fortawesome/free-brands-svg-icons"

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
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const slideVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-400%",
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration:20
        }
    }
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" whileInView="animate">
                <motion.h2 variants={textVariants}>Alexander Joaquin Abaloyan</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the latest works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faSass} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faPython} />
              <FontAwesomeIcon icon={faPhp} />
              <FontAwesomeIcon icon={faJava} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faReddit} />
        </motion.div> 
        <div className="imageContainer">
            <img src="/heyo.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
