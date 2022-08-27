import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Box from "@mui/material/Box"
import { Toolbar } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import { Grid } from "@mui/material"

import Logo from "./logo"
import Hero from "./hero"

import CategoriesList from "./categorieslist"

const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiCategory {
        edges {
          node {
            id
            type
          }
        }
      }
    }
  `)

  console.log(data)
  const categories = data.allStrapiCategory.edges
  return (
    <Grid item>
      <AppBar position="static" component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />
          <CategoriesList categories={categories} />
        </Toolbar>
      </AppBar>
      <Hero />
    </Grid>
  )
}

export default Header
