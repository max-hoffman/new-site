import Link from 'next/link';

const styles = {
  content: {
    order: 0,
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    width: '75%'
  }
};

const Content = (props) => (
  <div style={styles.content}>
    {props.children}
  </div>
);


export default Content;
