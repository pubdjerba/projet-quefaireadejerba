import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"

import { Typography } from "@mui/material"
import ButtonBase from "@mui/material/ButtonBase"
import { styled } from "@mui/material/styles"

import Grid from "@mui/material/Grid"
import { bgcolor } from "@mui/system"

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
})

const ActivityItem = ({ activity }) => {
  const { title, slug } = activity.node
  const { baselinePricing, category } = activity.node.price
  const { numberOfReview, view } = activity.node.review
  const { localFile } = activity.node.photo.cover_1

  return (
    <Paper>
      <Grid container direction="row">
        <Grid item sx={{ flexBasis: { md: "30%", xs: "100%" } }}>
          <Box>
            <GatsbyImage image={getImage(localFile)} alt="" />
          </Box>
        </Grid>
        <Grid item flexGrow={1}>
          <Grid container justifyContent="space-between" sx={{ p: 1 }}>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ActivityItem
