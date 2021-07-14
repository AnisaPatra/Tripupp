import React from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './footer.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <div>
            <div className="footer">
                <Container style={{ paddingBlock: "50px" }}>
                    <Row>
                        <Col >
                            <b className="colHead">All-in-one-platform</b>
                            <br /><br />
                            <ul className="lists">
                                <li>
                                    Payroll
                                </li>
                                <li>
                                    Employee Benefits
                                </li>
                                <li>
                                    Health Insurance
                                </li>
                                <li>
                                    Financial Benefits
                                </li>
                                <li>
                                    Hiring and Onborading
                                </li>
                                <li>
                                    Expert HR
                                </li>
                                <li>
                                    Time tracking tools
                                </li>
                                <li>
                                    Worker's Comp
                                </li>
                                <li>
                                    Integerations
                                </li>
                                <li>
                                    Gusto Wallet
                                </li>
                                <li>
                                    Gusto Partner Offers
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <b className="colHead">Tools</b>
                            <br /><br />
                            <ul className="lists">
                                <li>Small Business Financial Relief</li>
                                <li>Employee tax calculator</li>
                                <li>Burn rate calculator</li>
                                <li>Salary comparision tool</li>
                                <li>New hire checklist</li>
                                <li>Small Business guides</li>
                                <li></li>
                            </ul><br/>
                            <Row className="colHead">
                                <Col>Social</Col>
                                <Col><i class="bi bi-facebook" width="50" height="50" style={{color:"blue"}}></i></Col>
                                <Col><i class="bi bi-instagram" width="50" height="50" style={{color:"orange"}}></i></Col>
                            </Row><br/>
                            <Row className="colHead">
                            <Col>Contact</Col><Col style={{ color: "red" }}>0012576469</Col>
                            </Row>
                        </Col>
                        <Col>
                            <b className="colHead">About Gusto</b>
                            <br /><br />
                            <ul className="lists">
                                <li>About</li>
                                <li>Careers - <text style={{ color: "red" }}>We're hiring!</text></li>
                                <li>Press</li>
                                <li>Contact</li>
                                <li>Investors</li>
                                <li>Affliate Program</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}

export default Footer