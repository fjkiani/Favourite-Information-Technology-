import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    aLake: file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(getImage)

  return (
    <BackgroundImage
      className={className}
      fluid={img || data.code.childImageSharp.fluid}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
