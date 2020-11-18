import WarningSign from "./Components/WarningSign";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import MyBadge from "./Components/MyBadge";
import Filtering from "./Components/Filtering";

function App() {
  return (
    <Container>
      <Row>
        <WarningSign text="hi" />
        <MyBadge color="red" />
        <Filtering />
      </Row>
    </Container>
  );
}

export default App;
