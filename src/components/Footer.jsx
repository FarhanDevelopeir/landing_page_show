import {  Zap, MapPin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = ['Competitions', 'Schedule', 'Culture', 'Rules & Guidelines'];
const resources = ['Registration', 'FAQ', 'Past Events', 'Sponsors'];

export default function Footer() {
  return (
    <footer className={styles.footer} id="rules">
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Zap size={16} fill="#3b82f6" color="#3b82f6" />
              </div>
              <span className={styles.logoText}>
                Exc<span className={styles.logoBlue}>IT</span>e CUP
              </span>
            </div>
            <p className={styles.brandDesc}>
              Capital University of Science and Technology's premier innovation and technology competition.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}>
                {/* <Twitter size={16} /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              {resources.map(link => (
                <li key={link}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={14} className={styles.contactIcon} />
                <span>Capital University of Science and Technology, Islamabad</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={14} className={styles.contactIcon} />
                <span>excite@cust.edu.pk</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={14} className={styles.contactIcon} />
                <span>+92 xxx xxxxxxx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026{' '}
            <span className={styles.copyrightBrand}>ExcITe CUP</span>
            {' '}– Capital University of Science and Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}