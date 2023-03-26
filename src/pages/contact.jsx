/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import ContactHeader from "../components/Contact-header/contact-header";
import ContactForm from "../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.012068491944!2d-0.020487334193956794!3d51.49464601945652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602be05500001%3A0xab6af80f2ae3797b!2sCity%20Reach!5e0!3m2!1sen!2suk!4v1679860385704!5m2!1sen!2suk"
            loading="lazy"
          ></iframe>
        </div>

        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Contact;
