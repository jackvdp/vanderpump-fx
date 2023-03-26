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
                <img src="/img/fxservicesabout.jpeg" alt="" />
              </div>
              <div className="mb-40">
                <AboutIntro />
              </div>
              
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                        Priorities that will pop up in any particular month.
                      </h4>
                      <div className="spacial">
                        <p>
                        We offer a comprehensive range of services designed to ensure our corporate and private clients benefit from the most cost-effective, time-efficient, and secure way to make international payments. Our clients have access to
                        </p>
                      </div>

                      <h6>- Access to multi-currency bank accounts.</h6>
                      <h6>- Spot trades, forwards and market orders.</h6>
                      <h6>- 0% deposits on forwards.</h6>
                      <h6>- Free payments.</h6>
                      <h6>- Access to multi-currency bank accounts.</h6>
                      <h6>- Your own dedicated trader who understands your business.</h6>
                      <p>We will also help you time your trades better, enabling you to save even more then just on the exchange rate.</p>

                      <div className="quotes text-center">
                        <p>
                        Our wholesale rates enable our clients to benefit from the most cost-effective way to exchange their currency, saving up to 5% on exchange rates alone. We provide our clients with the flexibility of up to 5 working days to send in funds for spot trades.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/fxservicesabout1.jpeg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/fxservicesabout2.jpeg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-40">
                <Services style="4item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
