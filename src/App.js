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

import React, { useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

import allie from './img/DSC_4904.jpg'
import connie from './img/DSC_4966.jpg'

const issuesSections = ['Responsible-Development', 'Protect-Taxpayer', 'Preserve-Open-Space', 'Transparency']
// const issuesNav = issuesSections.map((issue) => { return <NavDropdown.Item href={`issues/${issue}`}>{issue}</NavDropdown.Item> })
const issuesNav = issuesSections.map((issue) => {
  return <NavDropdown.Item><Link to={`issues/${issue}`}>{issue}</Link></NavDropdown.Item>
})

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    // runHolder('.d-block')
  })

  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home">LOGO LOCKUP HERE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="The Issues" id="issues">
                  {issuesNav}
              </NavDropdown>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>

          <Row className='hero'>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <div className='slide1'>
                  </div>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <div className='slide2'>
                  </div>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <div className='slide3'>
                  </div>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <div className='slide4'>
                  </div>
                  <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          </Container>
          <Row id='biographies'>
            <Col>
              <Image src={connie} rounded fluid />
            </Col>
            <Col>
              <h1 style={{'text-align': 'center'}}>Meet Connie</h1>
                <p>
                  <br/>I was born and raised in DuBois, PA. I moved to Spring City in 2003 and in 2005 opened my business, Sweet Ashley’s Chocolate. I moved to Limerick with my husband, Rob, and daughter, Ashley in 2012.  My business provided unique opportunities to serve the community through my involvement and service with the Spring-Ford Chamber of Commerce and the Spring-Ford Rotary. I am immensely proud of my role in co-founding Royersford Community Day and the Royersford Business Association. Through years of talking with my neighbors, colleagues and customers, I have learned a lot about their concerns from traffic congestion to rapid development. But I have also shared in their love of our community, its local parks, open spaces and trails.
                </p>

                <p>
                  <br/>As a Limerick resident and small business owner in our community, I understand the impact the Limerick Township Supervisors’ decisions have on residents every day. As your Township Supervisor, I am dedicated to ensuring the transparency and fiscal responsibility our community deserves in making Limerick better now and for the future.
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
                  <br/>I was raised in Limerick township and graduated from Spring-Ford. Through undergraduate studies at the University of Oregon and the Urban Strategy masters program at Drexel University, I trained to become a facilitator of change. Outside the classroom, I organized a region of youth environmental activists and worked for a variety of nonprofits and start-ups both in the US and in Europe. I’ve spent years participating in community projects for young environmentalists, coordinated urban development conferences, and freelanced for international festivals and forums. I’m bringing my passion for and experience of sustainable urban design and community development to the Supervisor position.
                </p>

                <p>
                  <br/>I’m a member of the Linfield Master Plan Committee to create a healthy and vibrant neighborhood. I aim to engage and empower our community, with every voice heard in the creation of our shared future.
                </p>
            </Col>
            <Col>
              <Image src={allie} rounded fluid />
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
