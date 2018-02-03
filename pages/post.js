import Layout from './components/MyLayout.js';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

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
    fontSize: 19,
    fontWeight: 'lighter'
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
    <div style={styles.body} dangerouslySetInnerHTML={{__html: props.body}} className="article">
  
    </div>
    <style jsx global>{`
        .article p {
          margin-bottom: 10px;
          margin-top: 10px;
          line-height: 1.3;
          // text-indent: 25px;
          color: #2d343a;
        }
        
        .article li {
          margin: 20px;
        }

        .article h1 {
          font-weight: bold;
          font-size: 28px;
          margin-top: 40px;
        }
        
        .article h2 {
          font-weight: bold;
          font-size: 24px;
          margin-top: 40px;
        }

        .article a:link {
          // text-decoration: none;
          color: #2d343a;
        }
  
        .article a:hover {
          opacity: 0.6;
        }
  
        .article a:visited {
          color: #2d343a;
        }
  
        .article a:active {
          opacity: 0.3;
        }
      `}</style>
  </Layout>
);

Post.getInitialProps = async function({ query }) {
  const res = await fetch(`http://localhost:3000/api/posts/${query.id}`);
  const data = await res.json();
  // const file = await fs.readFile(`../markdown/${data.path}`);
  const html = marked(data.file || '');

  return {
    title: data.title,
    body: html,
    id: data.id,
    createdAt: moment(data.createdAt).format('MMM DD, YYYY'),
    updatedAt: data.updatedAt
  }
};

export default Post;
