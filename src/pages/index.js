import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/SEO"
export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.code.childImageSharp.fluid}>
      <Banner
        title="Favourite Information Technology"
        info=" Made in U.S.A"
      >
        <Link to="/#services" className="btn-white">
          Our Services
        </Link>
      </Banner>
    </StyledHero>
    <Services />
    <About />
  </Layout>
)
export const query = graphql`
  query {
    code: file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
