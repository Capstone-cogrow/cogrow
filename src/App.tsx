import { RecoilRoot } from "recoil";
import Router from "./routes/router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;
