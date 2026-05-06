import { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

const navLinks = ['Arena', 'Tracks', 'Timeline', 'Legacy', 'Rules'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Arena');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          {/* <span className={styles.logoIcon}> */}
            {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none"> */}
              <img src={logo} alt="CUST Logo" width={40} height={40} className={styles.logoIcon} />
              {/* <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#3b82f6" sWtroke="#3b82f6" strokeWidth="1" strokeLinejoin="round"/> */}
            {/* </svg> */}
          {/* </span> */}
          <span className={styles.logoText}>
            {/* EXC<span className={styles.logoHighlight}>IT</span>E CUP 2026 */}
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {navLinks.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`${styles.navLink} ${activeLink === link ? styles.active : ''}`}
                onClick={() => setActiveLink(link)}
              >
                {link}
                {activeLink === link && <span className={styles.activeDot} />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className={styles.actions}>
          <button className={styles.registerBtn}>Register Now</button>
          <button className={styles.iconBtn}>
            <User size={18} />
          </button>
          <button className={styles.menuBtn} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.mobileLink}
              onClick={() => { setActiveLink(link); setMobileOpen(false); }}
            >
              {link}
            </a>
          ))}
          <button className={styles.registerBtnMobile}>Register Now</button>
        </div>
      )}
    </nav>
  );
}