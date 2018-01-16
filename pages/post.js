import Layout from '../components/MyLayout.js';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
    <Layout>
       <h1>{props.title}</h1>
       <p>{props.createdAt}</p>
       <p>{props.body}</p>
    </Layout>
);

Post.getInitialProps = async function({ query }) {
    const res = await fetch(`http://localhost:3000/api/posts/${query.id}`);
    const data = await res.json();

    return {
      title: data.title,
      body: data.body,
      id: data.id,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
  };

export default Post;
