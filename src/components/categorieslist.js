import { Link } from "gatsby"
import React from "react"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import { Paper } from "@mui/material"
import { Box } from "@mui/material"
import { Typography } from "@mui/material"

const kebabCase = require("lodash/kebabCase")
const CategoriesList = ({ categories }) => (
  <Box sx={{ display: { sx: "none", sm: "none", md: "block" } }}>
    <Paper
      sx={{ borderRadius: 20, border: 2, borderColor: "bleu", p: 1 }}
      elevation={1}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ borderRadius: 20 }}
      >
        {categories.map(({ node }, i) => (
          <Box flexItem>
            <Link to={`/categories/${kebabCase(node.type)}/`} key={i}>
              <Typography>{node.type}</Typography>
            </Link>
          </Box>
        ))}
      </Stack>
    </Paper>
  </Box>
)

export default CategoriesList
