import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/bayRidge.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "serena.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="Our Location" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Bay Ridge, Brooklyn</h4>
          <p>
            We service clients in the loved town of Bay Ridge, Brooklyn, New York 11209
          </p>
         
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
      <br/>     <br/>
      <article className={styles.aboutInfo}>

      <Title title="Contact Us"/>
      <div className={styles.contact}> 
      <a href = "mailto: Favourite752@hotmail.com">Send Email</a>
      <h3>Favourite752@hotmail.com</h3>
      <br/>
      <h2> 1+347-574-1586</h2>

        </div>
    </article>
    </section>
  )
}

export default About
