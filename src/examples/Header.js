import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)
  return (
    <div>
      <h1>title:{siteMetadata.title}</h1>
      <h1>author:{siteMetadata.author}</h1>
    </div>
  )
}

export default Header

// const Header = () => {
//   const {
//     site: { siteMetadata },
//   } = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           data {
//             age
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <div>
//       <h1>title:{siteMetadata.title}</h1>
//       <h1>title:{siteMetadata.author}</h1>
//     </div>
//   )
// }
