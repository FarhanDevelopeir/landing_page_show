import { Mail, MapPin, Phone, UserRound, Zap } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Competitions', href: '#tracks' },
  { label: 'Schedule', href: '#timeline' },
  { label: 'Registration', href: '#participate' },
  { label: 'Event Details', href: '#legacy' },
];

const resources = [
  { label: 'How To Participate', href: '#participate' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Venue', href: '#rules' },
  { label: 'Official Contact', href: '#rules' },
];

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
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <UserRound size={14} className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>Coordinator</p>
                  <p className={styles.contactText}>Mr. Ibtisam Zia</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Phone size={14} className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>Phone</p>
                  <a href="tel:+923350518478" className={styles.contactLink}>0335-0518478</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail size={14} className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <a href="mailto:ibtisam.zia@cust.edu.pk" className={styles.contactLink}>
                    ibtisam.zia@cust.edu.pk
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={14} className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>Address</p>
                  <p className={styles.contactText}>
                    Capital University of Science and Technology, Islamabad Expressway,
                    Zone V, Islamabad, Pakistan
                  </p>
                </div>
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