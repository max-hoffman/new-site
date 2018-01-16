import Layout from '../components/MyLayout';
import Link from 'next/link';

const styles = {
  li: {
    margin: 10,
    padding: 20,
    marginTop: 25,
    marginBottom: 25,
    listStyleType: 'none',
    border: '0.5px solid #DDD',
  },
  title: {
    fontSize: 20,
    fontStyle: 'bold'
  },
  preview: {
    fontSize: 18
  }
}

const PostLink = (props) => (
  <Link href={`/post?title=${props.title}&preview=${props.preview}`}>
    <li style={styles.li}>
      <a style={styles.title}>{props.title}</a>
      <p style={styles.preview}>{props.preview}</p>
    </li>
  </Link>
);


const exampleLinks = [
  {
   title: 'Post 1',
   preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit at erat posuere varius. Integer ultrices vestibulum leo, vitae dictum quam maximus eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus dolor vitae ornare venenatis. Cras feugiat justo in quam iaculis viverra. Morbi quam felis, facilisis sed elit vitae, sagittis finibus enim. Donec nec lacus quis nisi aliquam placerat. Duis cursus a neque quis egestas. Vestibulum convallis est sit amet augue dictum, vel accumsan turpis congue. Integer ante nisi, aliquam quis suscipit id, porttitor non augue.'
  },
  {
   title: 'Post 2',
   preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit at erat posuere varius. Integer ultrices vestibulum leo, vitae dictum quam maximus eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus dolor vitae ornare venenatis. Cras feugiat justo in quam iaculis viverra. Morbi quam felis, facilisis sed elit vitae, sagittis finibus enim. Donec nec lacus quis nisi aliquam placerat. Duis cursus a neque quis egestas. Vestibulum convallis est sit amet augue dictum, vel accumsan turpis congue. Integer ante nisi, aliquam quis suscipit id, porttitor non augue.'
  },
  {
   title: 'Post 3',
   preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel velit at erat posuere varius. Integer ultrices vestibulum leo, vitae dictum quam maximus eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus dolor vitae ornare venenatis. Cras feugiat justo in quam iaculis viverra. Morbi quam felis, facilisis sed elit vitae, sagittis finibus enim. Donec nec lacus quis nisi aliquam placerat. Duis cursus a neque quis egestas. Vestibulum convallis est sit amet augue dictum, vel accumsan turpis congue. Integer ante nisi, aliquam quis suscipit id, porttitor non augue.'
  }
];

export default () => (
  <Layout>
    {/* TODO: list the posts here after pulling names from database */}
    <p>Overviews of my projects, ordered by most recent first.</p>
    { exampleLinks.map((link, idx) => <PostLink title={link.title} preview={link.preview} key={idx}/>) }
  </Layout>
);
