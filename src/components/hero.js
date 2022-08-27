import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

function Hero() {
  return (
    <Box>
      <Box sx={{ px: 2 }}>
        <Typography align="center" variant="h3" sx={{ fontWeight: 700, py: 2 }}>
          Que Faire à Djerba
        </Typography>
      </Box>
      <Box style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src={"../images/heroimage.jpg"}
          formats={["auto", "webp", "avif"]}
        />
        <Box
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
        >
          {/* Any content here will be centered in the component */}
          <Typography
            sx={{
              typography: { xs: "h5", sm: "h4", md: "h3" },
            }}
          >
            <b>Que Faire à Djerba</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
