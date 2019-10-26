import App, { Container } from 'next/app'

import Layout from '../components/Layout'
import 'antd/dist/antd.css'

class MyApp extends App {

  static async getInitialProps({ Component }) {
    return {
        
    }
  }

  render() {
    const { Component } = this.props

    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    )
  }
}

export default MyApp