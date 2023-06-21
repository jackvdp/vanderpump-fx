/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";
import styles from "./footerstyles.module.css"

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
    <div className={styles.myDiv} style={{ paddingTop: '100px', opacity: 0.5, textAlign: "center" }}>
      <p>
      Vanderpump FX has meticulously chosen top-notch fintech and foreign exchange partners to ensure our clients receive regulated services and products of the highest quality:
      </p>
      <p>
      Vanderpump FX Limited’s Payment and Foreign Currency Exchange Services are provided by Ebury Partners UK Limited. Vanderpump FX Limited is partnered with Ebury Partners UK Limited as a Programme Manager. Ebury Partners UK Limited is authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution (Financial Services Register No. 900797). Ebury Partners UK Ltd is registered with the Information Commissioner’s Office, with registration number: ZA345828.
      </p>
      <p>
      Payment Services are provided by Equals Connect Limited, registered in England and Wales (registered no. 07131446). Registered Office: Vintners’ Place, 68 Upper Thames St, London, EC4V 3BJ. Equals Connect Limited are authorised by the Financial Conduct Authority to provide payment services (FRN: 671508).
      </p>
      <p>
      All testimonials, reviews, opinions or case studies presented on our website may not be indicative of all customers.
      </p>
      <p>
      Vanderpump FX Limited is a company registered in England and Wales (number 13485907). Foreign exchange services are provided by ALT21 Limited which is authorised and regulated by the Financial Conduct Authority (firm reference number 783837) and is a company registered in England and Wales (number 10723112). The registered address is 45 Eagle Street, London WC1R 4FS, United Kingdom.
      </p>
    </div>
  )

}