
import BodyCompoent from '../src/Body/BodyComponent/Body'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './ThemeConfig';
function App() {
  return (
    <ThemeProvider theme={theme}>
   
      <BodyCompoent/>
   
    </ThemeProvider>
  );
}

export default App;
