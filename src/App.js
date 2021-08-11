import styled from "styled-components";
import "./App.css";
import { SearchBar } from "./components/searchBar";
import LogoPic from './logo_transparent.png';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2B3277;
`;

const Styleimg = {
  marginTop: '.5em',
  marginBottom: "2em", 
  width: "200px",
  height: "200px"
}

function App() {
  return (
    <AppContainer>
     <img src={LogoPic} style={Styleimg} alt="Logo" />
      <SearchBar />
    </AppContainer>
  );
}

export default App;
