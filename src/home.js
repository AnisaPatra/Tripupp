import React from 'react';
import './home.css';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <div class="home">
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
              <div class="col">
              <button type="button" class="btn">try for free now! &nbsp; &gt; </button>
              <h1>
                Set your business up with modern payroll, benefits and HR.
              </h1>
              <input class="email" placeholder="@ &nbsp; Your email address"/>
              </div>
              <div class="col">
                h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Home