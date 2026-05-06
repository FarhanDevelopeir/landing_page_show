import { ArrowRight, Code2, Gamepad2, Terminal, Palette, Trophy, TentTree, Video } from 'lucide-react';
import styles from './ChampionshipTracks.module.css';

const competitions = [
  {
    icon: <Terminal size={22} />,
    title: 'Quiz',
    number: '01',
    description:
      'This competition tests students on key concepts from core computer science domains through targeted questions in their respective fields.',
  },
  {
    icon: <Gamepad2 size={22} />,
    title: 'E-Gaming',
    number: '02',
    description:
      'This competition brings together top online gamers, usually in teams, where selected ExcITe Cup games not only showcase their identity as gamers but also help them develop valuable skills.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'On Spot Programming',
    number: '03',
    description:
      'It lets students demonstrate their programming and problem-solving skills under time pressure, showcasing their coding stamina to the IT industry.',
  },
  {
    icon: <Palette size={22} />,
    title: 'Poster Designing',
    number: '04',
    description:
      'It challenges graphic designers to think creatively and use innovative tools to develop unique ideas around a given theme.',
  },
  {
    icon: <Trophy size={22} />,
    title: 'Project Exhibition',
    number: '05',
    description:
      'It attracts outstanding students whose degree projects have made them proud to present and discuss their ideas to an extensive audience.',
  },
  {
    icon: <TentTree size={22} />,
    title: 'Table Tennis',
    number: '06',
    description:
      'It gives students a chance to showcase their strength and stamina through sports, while table tennis boosts problem-solving skills by promoting a healthy mind.',
  },
  {
    icon: <Video size={22} />,
    title: 'Thematic Video Design',
    number: '07',
    description:
      'It encourages students to craft compelling visual stories around a central theme, blending creativity with technical video design skills.',
  },
];

export default function ChampionshipTracks() {
  return (
    <section className={styles.section} id="tracks">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.sectionTitle}>CHAMPIONSHIP TRACKS</h2>
            <p className={styles.sectionSubtitle}>
              Precision-engineered challenges designed to test the limits of your{' '}
              <span className={styles.accentText}>technical prowess.</span>
            </p>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.selectBattlefield}>SELECT YOUR BATTLEFIELD</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {competitions.map((comp, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{comp.icon}</div>
                <span className={styles.cardNumber}>{comp.number}</span>
              </div>
              <h3 className={styles.cardTitle}>{comp.title}</h3>
              <p className={styles.cardDesc}>{comp.description}</p>
              <button className={styles.learnMore}>
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}