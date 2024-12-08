import Image from "next/image";
import "./Footer.css";
import Link from "next/link";
import FooterDropdown from "../FooterDropdown";

const mettāMuse = [
  {
    name: "About Us",
    link: "about-us",
  },
  {
    name: "Stories",
    link: "stories",
  },
  {
    name: "Artisans",
    link: "artisans",
  },
  {
    name: "Boutiques",
    link: "boutiques",
  },
  {
    name: "Contact Us",
    link: "contact-us",
  },

  {
    name: "EU Compliances Docs",
    link: "eu-compliances-docs",
  },
];

const quickLink = [
  {
    name: "Orders & Shipping",
    link: "orders-and-shipping",
  },
  {
    name: "Join/Login as a Seller",
    link: "login-as-seller",
  },
  {
    name: "Payment & Pricing",
    link: "payment-and-pricing",
  },
  {
    name: "Return & Refunds",
    link: "return-and-refunds",
  },
  {
    name: "FAQs",
    link: "faqs",
  },
  {
    name: "Privacy Policy",
    link: "privacy-policy",
  },
  {
    name: "Terms & Conditions",
    link: "terms-and-conditions",
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-upper">
        <div className="newletter">
          <h4 className="header">Be the first to know</h4>
          <p className="details">Sign up for updates from mettā muse.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-us">
            <h4 className="header">Contact Us</h4>
            <p className="details">+44 221 133 5360</p>
            <p className="details">customercare@mettamuse.com</p>
          </div>
          <div className="currency-info">
            <h4 className="header">Currency</h4>
            <p className="currency">
              <Image src="/icons/usa.svg" alt="usa" width={24} height={24} />
              <span> &#x25C6; USD</span>
            </p>
            <p
              className="details"
              style={{ fontSize: "12px", lineHeight: "14px" }}
            >
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <FooterDropdown title="mettā muse" links={mettāMuse} />
        <FooterDropdown title="QUICK LINKS" links={quickLink} />
        <div className="links-container">
          <h4 className="header" style={{ textTransform: "none" }}>
            mettā muse
          </h4>
          <div className="links-list">
            {mettāMuse.map((item, index) => (
              <Link href={item.link} key={index} className="links">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="links-container">
          <h4 className="header">Quick Links</h4>
          <div className="links-list">
            {quickLink.map((item, index) => (
              <Link href={item.link} key={index} className="links">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="external-info">
          <div className="follow-us">
            <h4 className="header">Follow us</h4>
            <div className="social-list">
              {["insta", "linkedIn"].map((social, index) => (
                <Image
                  key={index}
                  src={`/icons/${social}.svg`}
                  alt={social}
                  height={32}
                  width={32}
                />
              ))}
            </div>
          </div>
          <div className="payment-methods">
            <h4 className="header" style={{ textTransform: "none" }}>
              mettā muse ACCEPTS
            </h4>
            <div className="payment-method-list">
              {["gpay", "mastercard", "paypal", "amex", "applePay", "pay"].map(
                (method, index) => (
                  <Image
                    key={index}
                    src={`/icons/${method}.svg`}
                    alt={method}
                    height={35}
                    width={56}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
