import React from "react";
import Button from "../components/general/Button";
import styles from "./Contact.module.css";
import Enroll from "../components/general/Enroll";

const Contact = () => {
  return (
    <section className="py-[8rem]">
      <div className={`${styles.container}`}>
        <div className={`${styles.titleContainer}`}>
          <h2 className={`${styles.title}`}>Get in Touch!</h2>
          <p className={`${styles.text}`}>
            Your Gateway to Discovery! Whether you have questions about our
            programs, want to explore collaboration opportunities, or simply
            seek more information, our dedicated team is here to assist you.
          </p>
        </div>

        <div className={`${styles.contactContainer}`}>
          <div className={`${styles.contactInfo}`}>
            <h2>Contact information</h2>
            <p>P.O Box</p>

            <div>
              <img />
              <div>
                <p>+234 400 000 4444</p>
                <p>+234 400 000 4444</p>
              </div>
            </div>

            <div>
              <img />
              <p>industrialdesignfuta@gmail.com</p>
            </div>

            <div>
              <img />
              <p>South Gate, Akure, Ondo state, Nigeria</p>
            </div>
          </div>

          <div className="w-full">
            <form>
              <div className={`${styles.formContainer}`}>
                <h2 className="text-[#754FE2] font-bold">
                  Contact Information
                </h2>
                {/* top input */}
                <div className={`${styles.nameEmail}`}>
                  <div className={`${styles.formFeild}`}>
                    <label>Full Name</label>
                    <input />
                  </div>

                  <div className={`${styles.formFeild} `}>
                    <label>E-mail</label>
                    <input />
                  </div>
                </div>

                {/* Subject  input*/}
                <div className={`${styles.formFeild}`}>
                  <label>Subject</label>
                  <input />
                </div>

                {/* Text area */}
                <div className={`${styles.formFeild}`}>
                  <label>Message</label>
                  <textarea placeholder="Type your message here" />
                </div>

                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-[5rem]">
        <Enroll />
      </div>
    </section>
  );
};

export default Contact;
