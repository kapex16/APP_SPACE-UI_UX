import { Grid } from "@material-ui/core";
import BodyCompoent from "../src/Body/BodyComponent/Body";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ThemeConfig";
import HomeBody from "./components/home-body";
function App() {
  return (
    <ThemeProvider theme={theme}>
        {/* <BodyCompoent /> */}
        <HomeBody></HomeBody>
    
    </ThemeProvider>
  );
}

export default App;
