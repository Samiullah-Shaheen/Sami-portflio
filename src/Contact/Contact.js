import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <h2 className="h3 section-title">
          Have You Any Project? Please Drop a Message
        </h2>

        <p className="section-text">
          Get in touch and let me know how i can help. Fill out the form and
          i’ll be in touch as soon as possible.
        </p>

        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>

              <address className="contact-info">
                222 wahdat Road, 5th des, ghazni Afghanistan
              </address>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>

              <a href="tel:01234567789" className="contact-info">
                (+93) 789 666 895
              </a>

              <a href="tel:09765432200" className="contact-info">
                (+93) 798 425 895
              </a>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>

              <a href="mailto:info@jack.com" className="contact-info">
                sami.shahin895@gmail.com
              </a>

              <a href="mailto:support@jack.com" className="contact-info">
                shaheensamiullah49@gmail.com
              </a>
            </div>
          </li>

          <li>
            <ul className="contac-social-list">
              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Facebook</div>

                  <i className="social-icon ri-facebook-fill"></i>
                </a>
              </li>

              <li>
                <a href="#" className="contact-social-link">
                  <div className="tooltip">Instagram</div>

                  <i className="social-icon ri-instagram-line"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/samiullah-shaheen-76293a2a2/"
                  className="contact-social-link"
                >
                  <div className="tooltip">Linkedin</div>

                  <i className="social-icon ri-linkedin-fill"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Samiullah-Shaheen"
                  className="contact-social-link"
                >
                  <div className="tooltip">GitHub</div>

                  <i className="social-icon ri-github-line"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <form action="" className="contact-form">
        <div className="form-wrapper">
          <label for="name" className="form-label">
            Name
          </label>

          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="sami shaheen"
              className="input-field"
            />

            <ion-icon name="person-circle"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label for="email" className="form-label">
            Email
          </label>

          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="sami shaheen@mail.com"
              className="input-field"
            />

            <ion-icon name="mail"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label for="phone" className="form-label">
            Phone
          </label>

          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Phone Number"
              className="input-field"
            />

            <ion-icon name="call"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label for="message" className="form-label">
            Message
          </label>

          <div className="input-wrapper">
            <textarea
              name="message"
              id="message"
              required
              placeholder="Write message..."
              className="input-field"
            ></textarea>

            <ion-icon name="chatbubbles"></ion-icon>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
}
