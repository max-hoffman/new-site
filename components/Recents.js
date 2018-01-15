import Link from 'next/link';

const styles = {
  link: {
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    fontSize: 16,
    color: '#e9ecee'
  }
};

const Recents = () => (
  <ul>
    <Link>
      <li style={styles.link}>
        <a>Making a crypto trading bot with RL and LSTMs (Python)</a>
        <p>Jan 17th, 2018</p>
      </li>
    </Link>
    <Link>
      <li style={styles.link}>
        <a>Neural model prediction with SINDy (Python)</a>
        <p>Nov 17th, 2018</p>
      </li>
    </Link>
    <Link>
      <li style={styles.link}>
        <a>Automating apartment door opening with google cloud speech interpreter and Twilio (Python/Go)</a>
        <p>Sept 5th, 2018</p>
      </li>
    </Link>
    <Link>
      <li style={styles.link}>
        <a>Improving the social security model with Ethereum smart contracts (Solidity)</a>
        <p>Aug 3rd, 2018</p>
      </li>
    </Link>
</ul>
);

export default Recents;