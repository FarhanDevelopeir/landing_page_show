import { Sparkles, ArrowRight, Calendar } from 'lucide-react';
import styles from './SaveYourSpot.module.css';

export default function SaveYourSpot() {
  return (
    <section className={styles.section} id="legacy">
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          <span className={styles.badge}>
            <Sparkles size={12} /> Limited Seats Available
          </span>
          <h2 className={styles.title}>Save Your Spot</h2>
          <p className={styles.desc}>
            A unique event filled with networking, workshops, seminars, and engaging
            conversations with the industry's leading experts. Don't miss the opportunity
            to be part of the 11th ExcITe CUP.
          </p>
          <button className={styles.bookBtn}>
            Book Now <ArrowRight size={16} />
          </button>
        </div>

        {/* Right — Event Card */}
        <div className={styles.right}>
          <div className={styles.eventCard}>
            <div className={styles.editionWrap}>
              <span className={styles.editionNum}>11</span>
              <span className={styles.editionSuffix}>th</span>
            </div>
            <p className={styles.eventName}>ExcITe CUP</p>
            <p className={styles.year}>2026</p>
            <div className={styles.dateBadge}>
              <Calendar size={14} />
              <span>June 15, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}