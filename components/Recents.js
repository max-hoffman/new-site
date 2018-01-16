import Link from 'next/link';

const styles = {
  li: {
    listStyleType: 'none',
    textIndent: -5,
    marginLeft: 25,
    paddingTop: 10
  },
  link: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    fontSize: 16,
    color: '#e9ecee',
    cursor: 'pointer'
  },
  date: {
    paddingTop: 2,
    paddingBottom: 15,
    paddingLeft: 5,
    fontSize: 14,
    color: 'grey'
  }
};

const Recents = () => (
  <ul>
    <Link>
      <li style={styles.li}>
        <a style={styles.link}>Making a crypto trading bot with RL and LSTMs (Python)</a>
        <p style={styles.date}>Jan 17th, 2018</p>
      </li>
    </Link>
    <Link>
      <li style={styles.li}>
        <a style={styles.link}>Neural model prediction with SINDy (Python)</a>
        <p style={styles.date}>Nov 17th, 2018</p>
      </li>
    </Link>
    <Link>
      <li style={styles.li}>
        <a style={styles.link}>Automating apartment door opening with google cloud speech interpreter and Twilio (Python/Go)</a>
        <p style={styles.date}>Sept 5th, 2018</p>
      </li>
    </Link>
    <Link>
      <li style={styles.li}>
        <a style={styles.link}>Improving the social security model with Ethereum smart contracts (Solidity)</a>
        <p style={styles.date}>Aug 3rd, 2018</p>
      </li>
    </Link>
</ul>
);

export default Recents;