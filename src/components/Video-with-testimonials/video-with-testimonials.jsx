/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{ backgroundImage: `url(/img/clients.jpeg)` }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                    Working with Sam at Vanderpump is  an absolute joy.His attention to detail and professional approach make trades that would have appeared complex rather easy.I have enjoyed doing business with Sam for five years.
                    </p>
                    <div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Fahad Katergga</h6>
                          <span className="author-details">
                            Acountant, Faberge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Having worked with Vanderpump FX for years, we wouldn’t go anywhere else for the FX requirements of our lending business. The service is always fast and personal, and over the years we’ve saved a small fortune.
                    </p>
                    <div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Aamar Aslam</h6>
                          <span className="author-details">
                            CEO, Funding Invoice
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Vanderpump have been a true asset to our firm with all things currency related. Credible, insightful and trustworthy. I would highly recommend Sam and his team. They have been fantastic!
                    </p>
                    <div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Shak Rahim-Bux</h6>
                          <span className="author-details">
                            Director, Windsor Bux
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Vanderpump FX provided us with exceptional service and competitive rates, making our international transactions stress-free and cost-effective.
                    </p>
                    <div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Bill Dost</h6>
                          <span className="author-details">
                            CEO, D&D
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Efficient, reliable, and professional - Vanderpump FX has consistently exceeded our expectations with their bespoke currency exchange solutions.
                    </p>
                    <div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Chris Benyayer</h6>
                          <span className="author-details">
                            Founder, Hooman Life
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    The dedicated account manager at Vanderpump FX guided us through the currency hedging process, ensuring we made informed decisions to protect our investments.
                    </p>
                    <div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Jonathan Kettle</h6>
                          <span className="author-details">
                            Owner, Taxi Code
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
