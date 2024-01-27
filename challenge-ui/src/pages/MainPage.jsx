import { TablePanel } from "../components/TablePanel";
import Container from 'react-bootstrap/Container';


const MainPage = () => {
  return (
    <main>
      <Container className="mt-5 pt-5">
        <TablePanel />
      </Container>
    </main>
  );
};

export default MainPage;