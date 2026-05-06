import { CreditCard, Landmark, Mail, QrCode, ScanLine } from 'lucide-react';
import styles from './HowToParticipate.module.css';

const bankDetails = [
  {
    label: 'Account Title',
    value: 'Capital University of Science & Technology',
  },
  {
    label: 'Account #',
    value: '6010004521200058',
  },
  {
    label: 'IBAN',
    value: 'PK41BPUN6010004521200058',
  },
  {
    label: 'Bank Name',
    value: 'The Bank of Punjab',
  },
  {
    label: 'Branch Address',
    value: 'Raza Noor Plaza, Blue Area, Islamabad',
  },
];

const fees = [
  'Registration fee: Rs. 1500/- per participant',
  'Team registration: Rs. 4000/- per team',
];

export default function HowToParticipate() {
  return (
    <section className={styles.section} id="participate">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <ScanLine size={13} />
            How To Participate
          </span>

          <h2 className={styles.title}>Register with bank payment or the QR code.</h2>
          <p className={styles.desc}>
            Scan the QR code from the official poster or submit the registration fee
            using the bank details below. After payment, send your proof of payment to
            the provided email address.
          </p>

          <div className={styles.cards}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <Landmark size={18} />
                <h3>Bank Details</h3>
              </div>

              <div className={styles.details}>
                {bankDetails.map((item) => (
                  <div key={item.label} className={styles.detailRow}>
                    <span className={styles.detailLabel}>{item.label}</span>
                    <span className={styles.detailValue}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className={styles.feeBox}>
                <div className={styles.feeHeader}>
                  <CreditCard size={16} />
                  <span>Fee Structure</span>
                </div>
                <ul className={styles.feeList}>
                  {fees.map((fee) => (
                    <li key={fee}>{fee}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.proofBox}>
                <Mail size={16} />
                <div>
                  <p className={styles.proofLabel}>Submit proof of payment</p>
                  <a href="mailto:fahim.shahzad@cust.edu.pk" className={styles.proofLink}>
                    fahim.shahzad@cust.edu.pk
                  </a>
                </div>
              </div>
            </article>

            <article className={`${styles.card} ${styles.posterCard}`}>
              <div className={styles.cardHeader}>
                <QrCode size={18} />
                <h3>QR Code</h3>
              </div>

              <p className={styles.posterText}>
                Scan the QR code from the official participation poster to register
                quickly.
              </p>

              <a
                href="/participate-poster.png"
                target="_blank"
                rel="noreferrer"
                className={styles.posterLink}
              >
                <img
                  src="/participate-poster.png"
                  alt="ExcITe Cup participation poster with bank details and QR code"
                  className={styles.posterImage}
                />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
