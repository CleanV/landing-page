import { Container, Row, Col } from "react-bootstrap";
import IconImage from "../assets/img/Icon.png";

const Index = () => {
  return (
    <div className="Index">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Ayo Peduli Sekitar! <br /> <span>Buat Lingkunganmu</span> <br /> Bersih
              </h1>
              <p className="mb-4">Buat acara bersih bersihmu sendiri dimana pun dan kapanpun</p>
                <button className="btn btn-success btn-lg rounded-5 me-2 mb-xs-0 mb-2">Get Ticket</button>
                <button className="btn btn-outline-light btn-lg rounded-5">Learn More</button>
            </Col >
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={IconImage} alt="Icon-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="Schedule w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Upcoming Event</h1>
              <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Index