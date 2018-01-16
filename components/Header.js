import Link from 'next/link';
import Recents from './Recents';

const styles = {
  header: {
    order: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2d343a',
    width: '35%',
    // height: '100vh'
    overflow: 'auto'
  },
  title: {
    fontSize: 50,
    margin: 15,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    fontWight: 'bold',
    color: '#e9ecee'
  },
  link: {
    marginLeft: 20,
    padding: 5,
    fontSize: 24
  },
  signature: {
    display: 'flex',
    flexDirection: 'column',
    color: '#e9ecee',
    fontSize: 14,
    marginLeft: 25,
    marginBottom: 20,
    marginTop: 15
  }
};

const Header = () => (
  <div style={styles.header}>
    <Link href="/">
      <p style={styles.title}>Mild ML</p>
    </Link>
    <hr/>
    <Link href="/">
      <a style={styles.link}>Home</a>
    </Link>
    <Link href="/posts">
      <a style={styles.link}>All Posts</a>
    </Link>
    <Link href="/about">
      <a style={styles.link}>About</a>
    </Link>
    <hr/>
    <Recents />
    <hr/>
    <div style={styles.signature}>
      <p>Max Hoffman</p>
      <p>MD student at WUSM</p>
    </div>

    <style jsx global>{`
      a:link {
        text-decoration: none;
        color: #e9ecee;
      }

      a:hover {
        opacity: 0.6
      }

      a:visited {
        color: #e9ecee
      }

      a:active {
        opacity: 0.3;
      }

      hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        margin: 10px 10px;
        padding: 0;
      }

    `}</style>
  </div>
);

export default Header;
