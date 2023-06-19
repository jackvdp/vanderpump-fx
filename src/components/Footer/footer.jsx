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
      Trade Finance Ebury enables you to optimize your cash flow and bridge the gap by offering early payment to your suppliers.
      </p>
      <p>
      Access a borrowing capacity of up to £3 million and enjoy extended payment terms, with the flexibility to repay Ebury after 150 days, effectively reducing your liquidity requirements.
      </p>
      <p>
      Benefit from a pay-as-you-go model, where you will not encounter any upfront or hidden fees. This means you can utilize the facility whenever you need it without incurring unnecessary expenses.
      </p>
      <p>
      Rest assured that Ebury does not require collateral, ensuring that your existing credit lines remain unaffected.
      </p>
      <p>
      Here is how trade finance works for importers:
      </p>
      <ol style={{ opacity: 0.5 }} >
        <li>
        1. Receive an invoice from your supplier.
        </li>
        <li>
        2. Forward the invoice to Ebury, who will pay your supplier in their local currency.
        </li>
        <li>
        3. Carry out the sale of your goods or services.
        </li>
        <li>
        4. Repay Ebury in your domestic currency up to 150 days later.
        </li>
      </ol>
      <p>
      By paying your supplier in their local currency and repaying in yours, you can avoid risks associated with currency fluctuations and reduce costs. Paying your suppliers earlier improves your supplier relationships and allows you to negotiate discounts. Trade finance helps you align your expenses with your income, providing greater control over your finances.
      </p>
    </div>
  )

}