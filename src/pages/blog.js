import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog

// const blog = ({ data }) => {
//   const links = data.site.siteMetadata
//   return (
//     <Layout>
//       hello from blog page<Link to="/">Back Home</Link>
//       <h1>title: {links.title}</h1>
//       <h3>author: {links.author}</h3>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//         data {
//           age
//         }
//       }
//     }
//   }
// `
