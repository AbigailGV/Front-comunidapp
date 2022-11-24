/* eslint-disable  */
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export const Details= () => {
return(
    <Container>
        <Row style={{marginTop:"150px"}}>
        <Col xs={6}>
        <Figure>
            <Figure.Image
            width={500}
            height={500}
            alt="productImage"
            src="https://estaticos-cdn.elperiodico.com/clip/e186c9b4-1d98-48f4-811f-a54a20b85dd3_alta-libre-aspect-ratio_default_0.jpg"
            />
        </Figure>
        </Col>
        <Col>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        <Row style={{marginTop:"50px"}}>
            <Col md={{ span: 3, offset: 2 }}>
            <Button> Accept </Button>
            </Col>
            <Col md={{ span: 3, offset: 2}}>
            <Button> Return </Button>
            </Col>
        </Row>
        </Col>
        </Row>
    </Container>
    
);
};
