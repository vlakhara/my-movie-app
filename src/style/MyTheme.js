import { createTheme } from "@mui/material"

export const themeDark = createTheme({
  typography: {
    fontFamily: "monospace",
  },
  palette: {
    primary: {
      main: "#2C3333",
    },
    text: {
      main: "#2C3333",
    },
    secondary: {
      main: "#E7F6F2",
    },
  },
})

export const themeLight = createTheme({
  typography: {
    fontFamily: "monospace",
    color: "#7286D3",
  },
  palette: {
    primary: { main: "#FFF2F2" },
    text: {
      main: "#7286D3",
    },
    secondary: {
      main: "#7286D3",
    },
  },
})
