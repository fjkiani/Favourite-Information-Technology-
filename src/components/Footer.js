import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
    
      <div className={styles.copyright}>
        copyright &copy; Favoruite Information Technology {new Date().getFullYear()} all
        rights reserved
        <br/>
        <h5>This site is powered by<a href="https://www.fahadkiani.com" target="_blank">FJK</a></h5>
      </div>
    </footer>
  )
}

export default Footer
