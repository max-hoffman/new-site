import Layout from '../components/MyLayout.js';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import Remarkable from 'remarkable';

const md = new Remarkable();

const styles = {
  title: {
    fontSize: 30,
    fontWeight: 'normal'
  },
  date: {
    fontSize: 15,
    opacity: '0.8',
    fontStyle: 'italic',
    marginTop: 2,
    marginBottom: 2
  },
  body: {
    fontSize: 18
  },
  hr: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 15,
    marginBottom: 15
  }
}
const Post = (props) => (
  <Layout>
    <h1 style={styles.title}>{props.title}</h1>
    <p style={styles.date}>{props.createdAt}</p>
    <hr style={styles.hr}/>
    {/* <p style={styles.body}>{props.body}</p> */}
    <div style={styles.body} dangerouslySetInnerHTML={{__html: props.body}} />
  </Layout>
);

// Post.getInitialProps = async function({ query }) {
//     const res = await fetch(`http://localhost:3000/api/posts/${query.id}`);
//     const data = await res.json();

//     return {
//       title: data.title,
//       body: data.body,
//       id: data.id,
//       createdAt: moment(data.createdAt).format('MMM DD, YYYY'),
//       updatedAt: data.updatedAt
//     }
//   };

Post.getInitialProps = async function({ query }) {
  const res = await fetch(`http://localhost:3000/api/posts/${query.id}`);
  const data = await res.json();
  // const file = await fs.readFile(`../markdown/${data.path}`);
  const html = md.render(data.file || '');

  return {
    title: data.title,
    body: html,
    id: data.id,
    createdAt: moment(data.createdAt).format('MMM DD, YYYY'),
    updatedAt: data.updatedAt
  }
};

export default Post;
