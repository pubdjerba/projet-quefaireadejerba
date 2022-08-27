import React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
    },
  },
  palette: {
    primary: {
      main: "#ff4e83",
    },
    secondary: {
      main: "#001845",
    },
    success: {
      main: "#29B6F6",
    },
  },
})

export const AppThemeProvider = prop => {
  return <ThemeProvider theme={theme}>{prop.children}</ThemeProvider>
}
