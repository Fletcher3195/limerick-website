import './App.css'


import 'holderjs'
import { run as runHolder } from 'holderjs/holder';

import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    runHolder('.d-block');
  })

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">LOGO LOCKUP HERE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#issues">The Issues</Nav.Link>
            <Nav.Link href="#biographies">Meet the Candidates</Nav.Link>
            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
            <NavDropdown title="Social Media" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#donate">
              <Button variant="outline-warning">Contribute</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        {/* <Image src="holder.js/1920x1080" fluid /> */}
          <Row className='hero'>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    data-src="holder.js/1920x540?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    data-src="holder.js/1920x540?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    data-src="holder.js/1920x540?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col>
                <br/>
                <br/>
              </Col>
            </Row>
            {/* <Row id='issues'>
              <Col>
                <h1>Issues:</h1>
                <br/>
                <Tabs defaultActiveKey="issue-1" id="uncontrolled-tab-example">
                  <Tab eventKey="issue-1" title="Issue 1" style={{'min-height': '500px'}}>
                    <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam faucibus ex et semper. Cras ac nulla gravida, ultricies neque quis, scelerisque erat.
                    Aliquam varius nisl sed sapien rutrum pharetra. Ut a ultricies odio, maximus hendrerit ligula. Fusce justo risus, viverra vitae est eu, consectetur dapibus leo.
                    Aenean in scelerisque est, sed posuere diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla aliquam eget lectus vitae vehicula. Donec ligula
                    mauris, varius sit amet tincidunt vel, mattis quis diam. Vivamus risus lorem, dictum et magna sit amet, egestas molestie ante. Integer non malesuada dui.
                    Etiam suscipit egestas odio non aliquam. Morbi porttitor scelerisque est vel facilisis. Sed sem massa, imperdiet sit amet consequat pellentesque, blandit sit amet odio.
                    Sed sit amet commodo elit. Curabitur in dui nec libero tristique volutpat.
                  </Tab>
                  <Tab eventKey="issue-2" title="Issue 2" style={{'min-height': '500px'}}>
                    <br/>Suspendisse potenti. Etiam sagittis dignissim elit quis aliquet. Cras sagittis felis massa, eget dapibus enim pellentesque a. Integer commodo vehicula velit,
                    non tempor orci iaculis ac. Sed et viverra ex. Phasellus consectetur neque lorem, sit amet fermentum massa ultrices quis. Pellentesque eu ligula sapien.
                    Fusce dapibus pulvinar justo. Duis nunc ex, vulputate id fringilla in, vehicula in urna.
                  </Tab>
                  <Tab eventKey="issue-3" title="Issue 3" style={{'min-height': '500px'}}>
                    <br/>Suspendisse vitae mauris in nulla porta porttitor. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Vivamus blandit vulputate ante, varius vestibulum est tristique et. Maecenas a dapibus ante, ac dictum purus. Nunc mollis dolor non nunc scelerisque interdum.
                    Etiam dictum porta ante vel maximus. Nullam volutpat porta posuere. Vestibulum consequat nunc quis enim varius, eu tristique metus blandit.
                  </Tab>
                </Tabs>
              </Col>
            </Row> */}
          </Container>
          <Row id='biographies'>
            <Col>
              <Image src="holder.js/1920x810" fluid />
            </Col>
            <Col>
              <h1 style={{'text-align': 'center'}}>Meet Connie</h1>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum finibus lectus metus, vel suscipit neque vehicula sit amet.
                  Morbi sollicitudin pulvinar leo quis porta. Donec in sem vitae leo efficitur pretium. Integer at ex in enim condimentum blandit. Donec metus urna, maximus sed feugiat a,
                  fringilla nec orci. Quisque sed purus efficitur, maximus erat quis, sagittis magna.
                </p>

                <p>
                  Vivamus venenatis elementum vestibulum. Maecenas pretium posuere leo vitae ullamcorper. Maecenas fermentum urna id metus lobortis, sit amet finibus nibh placerat.
                  Donec eget blandit odio, vel aliquam neque. Aliquam et congue mauris. Nam viverra volutpat tortor sit amet pretium. Sed nec nisl finibus lacus rutrum malesuada.
                  Nam sodales ultrices diam quis pulvinar.
                </p>
                <p>
                  Fusce eleifend viverra posuere. Praesent semper lacus velit, quis rhoncus neque interdum et. Fusce congue ligula sit amet libero tempor feugiat.
                  Curabitur a risus vel lacus ultricies tristique. Vestibulum tincidunt ipsum iaculis elit pellentesque vulputate. Quisque porta magna vel lectus viverra,
                  sit amet finibus justo tristique. Pellentesque nulla turpis, viverra et tortor eget, aliquam efficitur ipsum. Vestibulum euismod ex in nisl scelerisque vehicula.
                  Proin id nibh et risus viverra vestibulum.
                </p>
                <p>
                  Nulla iaculis vulputate molestie. Suspendisse mi nulla, cursus sit amet sagittis id, pulvinar ut libero. Nunc lectus felis, semper at mauris quis, convallis posuere metus.
                  Vivamus laoreet felis eu nulla euismod sollicitudin. Curabitur elit purus, blandit quis massa vitae, blandit vestibulum lacus. Duis vehicula ut nulla id egestas.
                  Suspendisse dapibus vitae mauris vel hendrerit.
                </p>
                <p>
                  Ut quis orci at nulla facilisis vestibulum in ac mi. Vivamus pulvinar eget ante et sagittis. Sed nibh risus, rhoncus ac porttitor vel, vestibulum at erat.
                  Etiam ut commodo eros. Phasellus sit amet ligula vel nulla sagittis luctus ut faucibus lorem. Nam non placerat tellus, lacinia blandit ex. Fusce at eleifend massa,
                  quis pellentesque ligula. Praesent elit ligula, dignissim id varius sodales, condimentum eget dui. Nulla facilisi.
                </p>
            </Col>
          </Row>
          <Row>
              <Col>
                <br/>
                <br/>
                <br/>
                <br/>
              </Col>
            </Row>
          <Row>
          <Col>
              <h1 style={{'text-align': 'center'}}>Meet Alexandria</h1>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum finibus lectus metus, vel suscipit neque vehicula sit amet.
                  Morbi sollicitudin pulvinar leo quis porta. Donec in sem vitae leo efficitur pretium. Integer at ex in enim condimentum blandit. Donec metus urna, maximus sed feugiat a,
                  fringilla nec orci. Quisque sed purus efficitur, maximus erat quis, sagittis magna.
                </p>

                <p>
                  Vivamus venenatis elementum vestibulum. Maecenas pretium posuere leo vitae ullamcorper. Maecenas fermentum urna id metus lobortis, sit amet finibus nibh placerat.
                  Donec eget blandit odio, vel aliquam neque. Aliquam et congue mauris. Nam viverra volutpat tortor sit amet pretium. Sed nec nisl finibus lacus rutrum malesuada.
                  Nam sodales ultrices diam quis pulvinar.
                </p>
                <p>
                  Fusce eleifend viverra posuere. Praesent semper lacus velit, quis rhoncus neque interdum et. Fusce congue ligula sit amet libero tempor feugiat.
                  Curabitur a risus vel lacus ultricies tristique. Vestibulum tincidunt ipsum iaculis elit pellentesque vulputate. Quisque porta magna vel lectus viverra,
                  sit amet finibus justo tristique. Pellentesque nulla turpis, viverra et tortor eget, aliquam efficitur ipsum. Vestibulum euismod ex in nisl scelerisque vehicula.
                  Proin id nibh et risus viverra vestibulum.
                </p>
                <p>
                  Nulla iaculis vulputate molestie. Suspendisse mi nulla, cursus sit amet sagittis id, pulvinar ut libero. Nunc lectus felis, semper at mauris quis, convallis posuere metus.
                  Vivamus laoreet felis eu nulla euismod sollicitudin. Curabitur elit purus, blandit quis massa vitae, blandit vestibulum lacus. Duis vehicula ut nulla id egestas.
                  Suspendisse dapibus vitae mauris vel hendrerit.
                </p>
                <p>
                  Ut quis orci at nulla facilisis vestibulum in ac mi. Vivamus pulvinar eget ante et sagittis. Sed nibh risus, rhoncus ac porttitor vel, vestibulum at erat.
                  Etiam ut commodo eros. Phasellus sit amet ligula vel nulla sagittis luctus ut faucibus lorem. Nam non placerat tellus, lacinia blandit ex. Fusce at eleifend massa,
                  quis pellentesque ligula. Praesent elit ligula, dignissim id varius sodales, condimentum eget dui. Nulla facilisi.
                </p>
            </Col>
            <Col>
              <Image src="holder.js/1920x810" fluid />
            </Col>
          </Row>
          <Row>
              <Col>
                <br/>
              </Col>
            </Row>
          <Container>
            <Row id='volunteer'>
              <Col>
                <br/>
                <br/>
              </Col>
            </Row>
            <Row id='issues'>
              <Col>
                <h1>Get Involved (generic sign up form):</h1>
                <br/>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Recieve campaign emails or something" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Register as a Volunteer
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col>
              <br/>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <footer class="footer">
                <p>Generic footer stuff goes here</p>
                <p>
                  <a href="#">Back to top</a>
                </p>
              </footer>
            </Col>
          </Row>
    </div>
  )
}

export default App
