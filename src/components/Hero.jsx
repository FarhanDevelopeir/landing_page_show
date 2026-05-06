import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const scheduleData = [
  {
    day: 'SATURDAY',
    title: 'Opening',
    sub: 'Registration & Welcome',
    time1: '09:00 AM',
    time2: 'Lobby',
  },
  {
    day: 'SATURDAY',
    title: 'Competition',
    sub: 'All Tracks Begin',
    time1: '11:00 AM',
    time2: 'Arena',
  },
  {
    day: 'SATURDAY',
    title: 'Prize Distribution',
    sub: 'Awards Ceremony',
    time1: '05:00 PM',
    time2: 'Closing',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="arena">
      {/* Background overlay */}
      <div className={styles.bgOverlay} />
      <div className={styles.bgGradient} />

      <div className={`${styles.content} container`}>
        {/* Left Text */}
        <div className={styles.left}>
          <span className={styles.badge}>REGISTRATION OPEN FOR 2026</span>

          <h1 className={styles.heading}>
            THE ULTIMATE
            <br />
            <span className={styles.headingBrand}>
              Exc<span className={styles.itBlue}>IT</span>e CUP
            </span>
          </h1>

          <p className={styles.subtitle}>
            Witness the convergence of elite programming, technical mastery,
            and creative innovation.
          </p>

          <div className={styles.ctas}>
            <button className={styles.btnPrimary}>
              Register Now <ArrowRight size={16} />
            </button>
            <button className={styles.btnSecondary}>
              Explore Tracks
            </button>
          </div>
        </div>

        {/* Right Schedule Card */}
        <div className={styles.right}>
          <div className={styles.scheduleCard}>
            <h3 className={styles.scheduleTitle}>SCHEDULE</h3>
            <div className={styles.scheduleGrid}>
              {scheduleData.map((item, i) => (
                <div key={i} className={styles.scheduleCol}>
                  <span className={styles.scheduleDay}>{item.day}</span>
                  <span className={styles.scheduleEvent}>{item.title}</span>
                  <div className={styles.scheduleDivider} />
                  <span className={styles.scheduleSub}>{item.sub}</span>
                  <span className={styles.scheduleTime}>{item.time1}</span>
                  <span className={styles.scheduleVenue}>{item.time2}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}