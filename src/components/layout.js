import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "@mui/system"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <Box component={"main"}>{children}</Box>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
