import Header from './Header';
import Content from './Content';

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  }
};

const Layout = (props) => (
  <div style={styles.layout}>
    <Header />
    <Content>
      {props.children}
    </Content>

    <style jsx global>{`
      * { padding: 0; margin: 0; }
      
      html, body {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      
      body > * {
        flex-shrink: 0;
      }
    `}</style>
  </div>
);

export default Layout;