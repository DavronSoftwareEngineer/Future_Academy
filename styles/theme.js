const { createTheme } = require("@mui/material");
const { grey } = require("@mui/material/colors");

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#ffffff',
        }
    },
    typography: {
        body1: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
        },
        button: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
        }
    }
  });

export default theme;
  