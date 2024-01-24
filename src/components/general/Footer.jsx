import styles from "./Footer.module.css";
import { footerLinks, socialLinks } from "../../data";
import { design } from "../../assests";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.imgContainer}`}>
        <img src={design} className={`${styles.img}`} />
      </div>

      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.topContent}`}>
          <div className={`${styles.iDD}`}>
            <h2 className={`${styles.iDDTitle}`}>IDD FUTA</h2>
            <p>The future of design</p>
            <p>IDDFUTA@gmail.com</p>
            <p>+234 666 999 7777</p>
          </div>

          <div className={`${styles.gridFlex}`}>
            {footerLinks.map((footerLinkObject) => (
              <div key={footerLinkObject.title}>
                <h2 className={`${styles.linkTitle}`}>
                  {footerLinkObject.title}
                </h2>
                <ul className={`${styles.linkMenu}`}>
                  {footerLinkObject.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className={`${styles.linkTitle}`}>Connect on:</h2>
              <ul className={`${styles.socialLinks}`}>
                {socialLinks.map((socialLinkObject) => (
                  <img
                    key={socialLinkObject.imgName}
                    src={socialLinkObject.image}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className={`${styles.line}`}></div>

          <div className={`${styles.copyright}`}>
            <p>2023, All rights reserved</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
