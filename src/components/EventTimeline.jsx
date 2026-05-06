import styles from './EventTimeline.module.css';

const events = [
  {
    time: '08:00 AM',
    title: 'Opening Keynote',
    description: 'Visionary addresses from global tech leaders on the landscape of 2026.',
    side: 'right',
  },
  {
    time: '10:30 AM',
    title: 'Arena Qualifier',
    description: 'The initial screening for on-spot programming and technical logic rounds.',
    side: 'left',
  },
  {
    time: '01:00 PM',
    title: 'Mid-Day Showcase',
    description: 'Project exhibition and poster designing competitions run simultaneously.',
    side: 'right',
  },
  {
    time: '03:00 PM',
    title: 'E-Gaming Finals',
    description: 'Top-seeded gamers battle it out in the ultimate digital arena showdown.',
    side: 'left',
  },
  {
    time: '04:00 PM',
    title: 'Grand Finale',
    description: 'Final project presentations and the prestigious award ceremony.',
    side: 'right',
  },
];

export default function EventTimeline() {
  return (
    <section className={styles.section} id="timeline">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>EVENT TIMELINE</h2>
          <p className={styles.subtitle}>
            Sync your calendar with the <span className={styles.blue}>future of engineering.</span>
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {events.map((ev, i) => (
            <div key={i} className={`${styles.row} ${ev.side === 'left' ? styles.rowLeft : styles.rowRight}`}>
              {ev.side === 'left' ? (
                <>
                  <div className={styles.card}>
                    <h4 className={styles.cardTitle}>{ev.title}</h4>
                    <p className={styles.cardDesc}>{ev.description}</p>
                  </div>
                  <div className={styles.dotWrap}>
                    <div className={styles.dot} />
                  </div>
                  <div className={styles.timeWrap}>
                    <span className={styles.time}>{ev.time}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.timeWrap}>
                    <span className={styles.time}>{ev.time}</span>
                  </div>
                  <div className={styles.dotWrap}>
                    <div className={styles.dot} />
                  </div>
                  <div className={styles.card}>
                    <h4 className={styles.cardTitle}>{ev.title}</h4>
                    <p className={styles.cardDesc}>{ev.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}