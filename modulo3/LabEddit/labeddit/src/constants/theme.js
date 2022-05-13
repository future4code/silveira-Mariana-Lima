import { createTheme } from "@material-ui/core";
import {primarycolor, secundarycolor} from "./colors"

const theme = createTheme({
    palette: {
    primary: {
        main: primarycolor,
        contrastText: "black"
    },
    text: {
        primary: secundarycolor
    }
    }
})
export default theme