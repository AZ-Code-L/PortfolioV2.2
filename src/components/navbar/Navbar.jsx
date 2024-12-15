import "./nav.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {motion} from "framer-motion"
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    return (
        <div className="navbar">
            {/* sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                AZCode</motion.span>
                <motion.div className="social" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <a href="https://www.facebook.com/Hachi2828/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/xndrrn/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://github.com/AZ-Code-L" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/alexander-joaquin-abaloyan-900179320/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar