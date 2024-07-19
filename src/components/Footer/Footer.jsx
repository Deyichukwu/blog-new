import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      {/* <!-- footer  -->  */}
      <footer class="footerSection">
        <div class="footerwrapper">
          <div class="footerCard">
            <h3>Product</h3>
            <a href="#">ProductOverview</a>
            <a href="#">Shared Inbox</a>
            <a href="#">Knowledge Base</a>
            <a href="#">Live Chat</a>
            <a href="#">Proactive Messaging</a>
            <a href="#">Ominichannel Support</a>
            <a href="#">Automation</a>
            <a href="#">Mobile</a>
          </div>
          <div class="footerCard">
            <h3>Compare</h3>
            <a href="#">Zendesk</a>
            <a href="#">Intercom</a>
            <a href="#">Freshdesk</a>
            <a href="#">Gorgias</a>
            <a href="#">Front</a>
          </div>
          <div class="footerCard">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Newslater</a>
            <a href="#">Terms & Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Do Not Sell</a>
          </div>
          <div class="footerCard">
            <h3>Support</h3>
            <a href="#">Developers</a>
            <a href="#">Help Docs</a>
            <a href="#">Contact</a>
            <a href="#">Status</a>
          </div>
        </div>
        <div class="footerImage">
          <img src="./assets/icons8-twitterx-50.png" alt="x" />
          <img src="./assets/icons8-facebook-50 (1).png" alt="facebook" />
          <img src="./assets/icons8-linkedin-50 (1).png" alt="linkedin" />
          <img src="./assets/icons8-instagram-80.png" alt="insta" />
          <h6>© 2024 Help Scout</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
