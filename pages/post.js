import Layout from '../components/MyLayout.js'

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>{props.url.query.preview}</p>
    </Layout>
)
