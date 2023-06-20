/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>3rd Floor City Reach,</p>
                    <p>5 Greenwich View Place,</p>
                    <p>London, E14 9NN</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>
                      <a className="emailLink" href="mailto:info@vanderpumpfx.com">
                        info@vanderpumpfx.com
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+44 (0) 204 580 1229</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 align-right">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a 
                href="https://www.linkedin.com/company/vanderpump-fx/"
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Disclaimer />
        </div>
      </div>
    </footer>
  );
};

export default Footer;


const Disclaimer = () => {
  return(
    <div style={{ paddingTop: '100px', opacity: 0.5 }}>
      <p>
      Vanderpump FX’s Payment and Foreign Currency Exchange Services are provided by Ebury Partners UK Limited.
      </p>
      <p>
      Vanderpump FX is partnered with Ebury Partners UK Limited as a Programme Manager.
      </p>
      <p>
      Benefit from a pay-as-you-go model, where you will not encounter any upfront or hidden fees. This means you can utilize the facility whenever you need it without incurring unnecessary expenses.
      </p>
      <p>
      Ebury Partners UK Limited is authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution (Financial Services Register No. 900797).
      </p>
      <p>
      Ebury Partners UK Limited is registered with the information Commissioner’s Office, with registration number: ZA345828.
      </p>
    </div>
  )

}