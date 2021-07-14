import React from 'react';
import './home.css';
import Footer from './footer';
import { Row, Col } from 'react-bootstrap';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <div class="head">
      <div class="nav">
        <div class="container">
        </div>
        <div class="row">
          <div class="col-2">
            <h2 class="title"> Tripupp Hr </h2>
          </div>
          <div class="col-9">
            <div class="nav_items">
              <label>Home</label>
              <label>Payroll</label>
              <label>Benefits</label>
              <label>Pricing</label>
              <label>Work with us</label>
            </div>
          </div>
          <div class="col-1">
            <button type="button" class="btn">Sign in  &gt; </button>
          </div>
        </div>
      </div>
      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="col-7">
              <button type="button" class="btn">try for free now! &nbsp; &gt; </button>
              <h1>
                Set your business up with modern payroll, benefits and HR.
              </h1>
              <div class="input-group">
                <input class="email" placeholder="@ &nbsp; Your email address" />
                <button type="button" class="btn">Get Started</button>
              </div>
              <p>
                Our plans were built to fit your unique needs. Streamtrne onboarding , benefits, payroll, PTO and more
                with our simple, intuitive platform.
              </p>
            </div>
            <div class="col">
              <div class="card back" style={{ borderColor: "white", borderWidth: "1.5px", borderRadius: "10px" }}>
                <div class="card-body">
                  <div class="row">
                    <div class="col-10">
                      <h5 style={{ fontWeight: "bold", marginTop: "5px" }}>Add New Employee</h5>
                    </div>
                    <div class="col">
                      <i class="bi bi-search" style={{ fontSize: '0.7rem' }}></i>&nbsp;<b>Inbox</b>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <div style={{ marginTop: "30px", marginLeft: "10px" }}>
                        <img src="https://s.yimg.com/ny/api/res/1.2/g9wcTOuXY0u.P9smbA.N_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOS44NA--/https://s.yimg.com/uu/api/res/1.2/1PfxRLc7u6XyOAlhqjbs7A--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/shape_articles_166/090b69d5e0b6199f98bb081bbe44d45e" style={{ width: "60px", height: "60px", borderRadius: "50%", margin: "0 0 10px 25px" }}></img>
                        <br />
                        <h6 style={{ marginLeft: "15px", fontWeight: "600" }}>Jilan Wilde</h6><sub>Full Time . Los Angeles</sub>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card job_details">
                        <div class="card-header">
                          Job Details
                        </div>
                        <table>
                          <tr class="trst-group-item">
                            <td class="first">Job Title</td>
                            <td><label>
                              <tr>
                                <td style={{ width: "200px" }}>Class Instructor </td>
                                <td><i class="bi bi-check-circle-fill"></i></td>
                              </tr></label></td>
                          </tr>
                          <tr class="trst-group-item">
                            <td class="first">Department </td>
                            <td><label>
                              <tr>
                                <td style={{ width: "200px" }}>Fitness Training </td>
                                <td><i class="bi bi-check-circle-fill"></i></td>
                              </tr></label></td>
                          </tr>
                          <tr class="trst-group-item">
                            <td class="first">Work Location </td>
                            <td><label>
                              <tr>
                                <td style={{ width: "200px" }}>Los Angeles</td>
                                <td> <i class="bi bi-check-circle-fill"></i></td>
                              </tr></label></td>
                          </tr>
                          <tr class="trst-group-item">
                            <td class="first">Classification </td>
                            <td><label>
                              <tr>
                                <td style={{ width: "200px" }}>Independent Contractor</td>
                                <td> <i class="bi bi-check-circle-fill"></i></td>
                              </tr>
                            </label></td>
                          </tr>
                          <tr class="trst-group-item">
                            <td class="first">Hire Date </td>
                            <td><label>
                              <tr>
                                <td style={{ width: "200px" }}>01/08/2020 </td>
                                <td><i class="bi bi-check-circle-fill"></i></td>
                              </tr></label></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="grid-container">
        <div class="item1"><button style={{ borderRadius: "60%", border: 0, paddingRight: "10px", backgroundColor: "#f0ebeb" }}><i class="bi bi-check2" style={{ color: "green" }}></i></button>Free 14-day Demo</div>
        <div class="item2"><button style={{ borderRadius: "60%", border: 0, paddingRight: "10px", backgroundColor: "#f0ebeb" }}><i class="bi bi-check2" style={{ color: "green" }}></i></button>No Credit Card Needed</div>
        <div class="item3"><button style={{ borderRadius: "60%", border: 0, paddingRight: "10px", backgroundColor: "#f0ebeb" }}><i class="bi bi-check2" style={{ color: "green" }}></i></button>No Setup</div>
      </div>
      <br />
      <div class="hr">
        <div class="row">
          <div class="col-7 left">
            <button><i class="bi bi-people" style={{ fontSize: "2rem", color: "white" }}></i></button>
            <h1>HR</h1><h3>Manage your people with ease.</h3>
            <div class="card job_details" style={{ width: "auto", marginTop: "120px", marginLeft: "80px", padding: "10px" }}>
              <table class="demo" cellPadding="8px">
                <tr>
                  <td colSpan="2" class="heading">
                    Add a candidate
                  </td>
                </tr>
                <tr>
                  <td><hr style={{ width: "150px", color: "aqua", height: "10px", borderRadius: "7px" }} /></td>
                  <td><hr style={{ width: "150px", color: "aqua", height: "10px", borderRadius: "7px" }} /></td>
                  <td><hr style={{ width: "150px", height: "10px", borderRadius: "7px" }} /></td>
                  <td><hr style={{ width: "150px", height: "10px", borderRadius: "7px" }} /></td>
                </tr>
                <tr>
                  <td><hr style={{ width: "100px", height: "10px", borderRadius: "7px" }} /></td>
                  <td><hr style={{ width: "100px", height: "10px", borderRadius: "7px" }} /></td>
                  <td><hr style={{ width: "100px", height: "10px", borderRadius: "7px" }} /></td>
                  <td><hr style={{ width: "100px", height: "10px", borderRadius: "7px" }} /></td>
                </tr>
                <tr>
                  <td colSpan="3" class="heading">Review your offer letter for Jilan Wilde</td>
                </tr>
                <tr>
                  <td colSpan="4"><hr style={{ width: "500px", height: "10px", borderRadius: "7px" }} /></td>
                </tr>
                <tr>
                  <td colSpan="2"><hr style={{ width: "300px", height: "10px", borderRadius: "7px" }} /></td>
                </tr>
                <div class="row">
                  <div class="col" class="heading" style={{ marginLeft: "10px" }}>Dear Jilian Wilde,</div>
                </div>
                <tr>
                  <td colSpan="3">
                    <hr style={{ width: "400px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "300px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "400px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "300px", height: "10px", borderRadius: "7px" }} /><br />
                    <hr style={{ width: "400px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "300px", height: "10px", borderRadius: "7px" }} /><br />
                    <hr style={{ width: "400px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "300px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "400px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "300px", height: "10px", borderRadius: "7px" }} /><br />
                    <hr style={{ width: "400px", height: "10px", borderRadius: "7px" }} />
                    <hr style={{ width: "300px", height: "10px", borderRadius: "7px" }} />
                  </td>
                  <td>
                    <p class="light">Position</p>
                    <p class="dark">Manager</p>
                    <p class="light">Salary</p>
                    <p class="dark">$999.00 Per Week</p>
                    <p class="light">Joining Date</p>
                    <p class="dark">August 01, 2021</p>
                    <p class="light">Employer</p>
                    <p class="dark">Rosa Amador</p>
                    <button style={{ borderRadius: "0", width: "150px", color: "white" }}>SEND OFFER</button>
                  </td>
                </tr>
                <div class="row">
                  <div class="col">

                  </div>
                  <div class="col">

                  </div>
                </div>
              </table>
            </div>
          </div>
          <div class="col right">
            <div class="card job_details">
              <div class="card-header">
                Job Details
              </div>
              <table>
                <tr class="trst-group-item">
                  <td class="first">Job Title</td>
                  <td><label>
                    <tr>
                      <td style={{ width: "200px" }}>Class Instructor </td>
                      <td><i class="bi bi-check-circle-fill"></i></td>
                    </tr></label></td>
                </tr>
                <tr class="trst-group-item">
                  <td class="first">Department </td>
                  <td><label>
                    <tr>
                      <td style={{ width: "200px" }}>Fitness Training </td>
                      <td><i class="bi bi-check-circle-fill"></i></td>
                    </tr></label></td>
                </tr>
                <tr class="trst-group-item">
                  <td class="first">Work Location </td>
                  <td><label>
                    <tr>
                      <td style={{ width: "200px" }}>Los Angeles</td>
                      <td> <i class="bi bi-check-circle-fill"></i></td>
                    </tr></label></td>
                </tr>
                <tr class="trst-group-item">
                  <td class="first">Classification </td>
                  <td><label>
                    <tr>
                      <td style={{ width: "200px" }}>Independent Contractor</td>
                      <td> <i class="bi bi-check-circle-fill"></i></td>
                    </tr>
                  </label></td>
                </tr>
                <tr class="trst-group-item">
                  <td class="first">Hire Date </td>
                  <td><label>
                    <tr>
                      <td style={{ width: "200px" }}>01/08/2020 </td>
                      <td><i class="bi bi-check-circle-fill"></i></td>
                    </tr></label></td>
                </tr>
              </table>
            </div>
            <div class="card employee" style={{ marginBlockStart: "550px", position: "absolute", zIndex: "0" }}>
              <div class="card-body">
                <div class="row">
                  <div class="col-9">
                    <h4 style={{ letterSpacing: "1.3px", fontWeight: "550" }}>Employee Directory</h4>
                  </div>
                  <div class="col">
                    <h6 style={{ marginTop: "5px", color: "grey" }}>Show All</h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6" style={{ padding: "20px" }}>
                    <div class="card shadow bg-white">
                      <center>
                        <div class="card-body">
                          <img src="https://s.yimg.com/ny/api/res/1.2/g9wcTOuXY0u.P9smbA.N_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOS44NA--/https://s.yimg.com/uu/api/res/1.2/1PfxRLc7u6XyOAlhqjbs7A--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/shape_articles_166/090b69d5e0b6199f98bb081bbe44d45e" style={{ width: "80px", height: "80px", borderRadius: "50%", margin: "0 0 10px 25px" }}></img>
                          <h4>Naomi Brett</h4>
                          <h6 style={{ marginTop: "5px", color: "grey" }}>Software Engineer</h6>
                          <br />
                          <h6 style={{ marginTop: "5px", color: "grey" }}>Full Time</h6>
                          <h6 style={{ marginTop: "5px", color: "grey" }}>San Fransico</h6>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div class="col-6" style={{ padding: "20px" }}>
                    <div class="card shadow bg-white">
                      <center>
                        <div class="card-body">
                          <img src="https://s.yimg.com/ny/api/res/1.2/g9wcTOuXY0u.P9smbA.N_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOS44NA--/https://s.yimg.com/uu/api/res/1.2/1PfxRLc7u6XyOAlhqjbs7A--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/shape_articles_166/090b69d5e0b6199f98bb081bbe44d45e" style={{ width: "80px", height: "80px", borderRadius: "50%", margin: "0 0 10px 25px" }}></img>
                          <h4>Anisa Patra</h4>
                          <h6 style={{ marginTop: "5px", color: "grey" }}>Frontend Developer</h6>
                          <br />
                          <h6 style={{ marginTop: "5px", color: "grey" }}>Full Time</h6>
                          <h6 style={{ marginTop: "5px", color: "grey" }}>Mumbai</h6>
                        </div>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payroll">
        <button className="blue-gradient"><i class="bi bi-graph-up" style={{ fontSize: "2rem", color: "white" }}></i></button>
        <h1>Payroll</h1><h3>Payroll that's easy to use and seriously smart.</h3><br/>
        <div class="grid-container" style={{marginTop:"150px"}}>
        <div><img src='./images/dollar.png'/></div>
        <div><img src='./images/award.png'/></div>
        <div><img src='./images/money.png'/></div>
        <div><img src='./images/calendar.png'/></div>
      </div>
      </div>
      <div class="advisor">
        <Row>
          <Col>
            <h1>We're here to <br />help you. <br /> Ask us anything <br />or schedule a demo call.</h1>
          </Col>
          <Col>
            <button>Talk to advisor</button>
          </Col>
        </Row>
      </div>
      <br />
      <div class="above_footer">
        <center>
          <h1>Get Your Team Working With Us!</h1>
          <button>Get started</button>
        </center>
      </div>

      <Footer />
    </div>
  )

}

export default Home