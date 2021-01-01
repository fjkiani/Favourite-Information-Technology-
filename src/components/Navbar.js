import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import { Link } from "gatsby"
import { HashLink } from 'react-router-hash-link';

import socialIcons from "../constants/social-icons"
import logo from "../images/logo.jpg"
const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className = {`${styles.navLinks}`}>
              <li>
                <AniLink fade to="/">Home
                </AniLink>
                <Link fade to="/#services">Services
                </Link>
                <Link fade to="/#contact">Contact
                </Link>
              </li>
  
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
