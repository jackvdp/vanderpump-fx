/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutIntro from "../About-intro/fx-services";
import Services from "../Services/fx-service";

const BlogDetails = ({ theme }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/fxsecurity.jpeg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                      Secure International Payments with Equals Money.
                      </h4>
                      <div className="spacial">
                        <p>
                        At Vanderpump FX, we understand the importance of security when it comes to making international payments. Therefore, payments for our company are provided by Equals Money:
                        </p>
                      </div>

                      <h6>- Authorised by the Financial Conduct Authority as an E-Money institution.</h6>
                      <h6>– Firm Reference Number : 488396.</h6>
                      <h6>- Listed on the London Stock Exchange.</h6>
                      <h6>- Trusted by Warner Brothers, HBO, Netflix, Toyota, Universal.</h6>
                      <h6>- 5 STAR Trust Pilot Rating.</h6>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
