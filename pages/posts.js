import Layout from './components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const styles = {
  header: {
    fontSize: 30
  },
  li: {
    margin: 10,
    padding: 20,
    marginTop: 25,
    marginBottom: 25,
    listStyleType: 'none',
    border: '0.5px solid #DDD',
  },
  title: {
    fontSize: 22,
    fontStyle: 'bold'
  },
  preview: {
    fontSize: 18,
    opacity: 0.6
  }
}

const PostLink = (props) => (
  // <Link href={`/post?title=${props.link.title}&preview=${props.link.body}`}>
  <Link href={`/post?id=${props.link.id}`}>
    <li style={styles.li}>
      <a style={styles.title}>{props.link.title}</a>
      {/* <p style={styles.preview}>{`${props.link.body.slice(0, 100)}...`}</p> */}
    </li>
  </Link>
);

const Posts = (props) => (
  <Layout>
    {/* TODO: list the posts here after pulling names from database */}
    <h1 style={styles.header}>Projects, research, etc:</h1>
    { props.links.map((link, idx) => <PostLink link={link} key={idx}/>) }
  </Layout>
);

Posts.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();

  console.log(`Show data fetched: ${data}`);
  
  return {
    links: data
  }
};

export default Posts;
