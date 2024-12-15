import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faContactCard, faEnvelope, faHome, faPerson, faProjectDiagram, faScrewdriver, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHackerNews } from "@fortawesome/free-brands-svg-icons"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDuration: -1
    }
  }
}

const itemVariants = {
  open: {
    transition: {
      y: 0,
      opacity: 1,
    }
    
  },
  closed: {
    y: 50,
    opacity:0
  }
}

const Links = () => {

  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ]

  const itemSVG = [
    <FontAwesomeIcon icon={faHome} />,
    <FontAwesomeIcon icon={faScrewdriver} />,
    <FontAwesomeIcon icon={faProjectDiagram} />,
    <FontAwesomeIcon icon={faContactCard} />,
    <FontAwesomeIcon icon={faPerson} />
  ]

  return (
    <div className="container">
      <div className="linksSVG" variants={variants}>
        <FontAwesomeIcon icon={faHome} variants={itemVariants}/>
        <FontAwesomeIcon icon={faScrewdriver} variants={itemVariants} />
        <FontAwesomeIcon icon={faProjectDiagram} variants={itemVariants} />
        <FontAwesomeIcon icon={faContactCard} variants={itemVariants} />
        <FontAwesomeIcon icon={faPerson} variants={itemVariants} />
      </div>
      <motion.div className="links" variants={variants}> 
            {items.map((item) => (
              <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.1, color:"#ffd700"}} whileTap={{scale:0.9}} >
                {item} 
              </motion.a>
            ))}
      </motion.div>
    </div>
  )
}

export default Links
