import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      {/* <!-- peloton Nav Bar  -->  */}
      <section class="navSection">
        <div class="NavWrapper">
          <div class="navLeft">
            <img
              src="https://th.bing.com/th/id/R.e992cdfd6a201d28f78ba85864ab7a34?rik=s4QWqMzvvx4MdA&pid=ImgRaw&r=0"
              alt="image"
            />
            <p>Support</p>
          </div>
          <div class="navRight">
            <input type="search" placeholder="Search..." />
            <a href="#">ALL SYSTEMS OPERATIONAL</a>
          </div>
        </div>
      </section>

      {/* <!-- Get Assistance Section  -->  */}
      <section class="assistanceSection">
        <h1>Get assistance</h1>
        <div class="assistanceWrapper">
          <div class="assistanceCard1">
            <img
              src="https://support.onepeloton.com/resource/1701243121000/contactUsSupportCardGraphic"
              alt="image"
            />
            <div class="writingUpTag">
              <h2>Need help with your hardware or order?</h2>
              <p>
                Find answers about your Peloton hardware, check your order
                status and more.
              </p>
            </div>
            <div class="butAnchor">
              <button>CHAT WITH SUPPORT</button>
              <a href="#">VISIT OUR SUPPORT CENTER</a>
            </div>
          </div>
          <div class="assistanceCard1">
            <img
              src="https://support.onepeloton.com/resource/1701243121000/contactUsSalesCardGraphic"
              alt="image"
            />
            <div class="writingUpTag2">
              <h2>Have questions before making a purchase?</h2>
              <p>
                Ask questions, get help placing an order and learn how to try
                Peloton in person.
              </p>
            </div>
            <div class="butAnchor2">
              <button>CHAT WITH SALES</button>
              <a href="#">Find a Peloton store near you</a>
            </div>
          </div>
        </div>
        <div class="corporateSection">
          <h1>Corporate contacts</h1>
          <div class="corporateWrapper">
            <div class="coporateCard">
              <h3>ADVERTISING</h3>
              <a href="#">advertising@onepeloton.com</a>
            </div>
            <div class="coporateCard">
              <h3>CONTENT CREATION</h3>
              <a href="#">social@onepeloton.com</a>
            </div>
            <div class="coporateCard">
              <h3>MUSIC</h3>
              <a href="#">musicinquiries@onepeloton.com</a>
            </div>
            <div class="coporateCard">
              <h3>PARTNERSHIPS</h3>
              <a href="#">partnerships@onepeloton.com</a>
            </div>
          </div>
          <div class="coporateCard5">
            <h3>PRESS</h3>
            <a href="#">press@onepeloton.com</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
