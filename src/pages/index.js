import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import ActivitiesList from "../components/activitieslist"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "@mui/material"
import { AppThemeProvider } from "../themes/AppThemeProvider"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Navbar from "../components/Navbar"
import Hero from "../components/hero"
import CategoriesList from "../components/categorieslist"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiActivity {
        edges {
          node {
            photo {
              cover_1 {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            price {
              baselinePricing
              category
              promotion
            }
            review {
              numberOfReview
              view
            }
            subTitle
            title
            seo {
              metaTitle
              metaDescription
            }
            description {
              data {
                description
              }
            }
            categories {
              type
            }
            slug
          }
        }
      }
      allStrapiCategory {
        edges {
          node {
            type
          }
        }
      }
    }
  `)
  const activities = data.allStrapiActivity.edges

  return (
    <AppThemeProvider>
      <CssBaseline />
      <Layout>
        <Seo title="Que faire à Djerba" />
        <Navbar />
        <Hero />
        <Container component="main" maxWidth="lg" sx={{ height: "100vh" }}>
          <Box mt={5}>
            <Grid container spacing={2}>
              <Grid item md={3}>
                item left
                <hr />
              </Grid>
              <Grid item md={9} xs={12}>
                <ActivitiesList activities={activities} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </AppThemeProvider>
  )
}

export default IndexPage
