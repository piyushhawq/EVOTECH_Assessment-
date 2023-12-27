import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Right from "./components/Right";

function App() {
  return (
    <Container>
      <Sidebar />
      <Right />
    </Container>
  );
}

const Container = styled.div`
  width: 1807px;
  height: 1805px;
  display: flex;
  align-items: center;
`;

export default App;
