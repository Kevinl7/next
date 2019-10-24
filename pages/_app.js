import App, { Container } from 'next/app'

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
        <Component />
      </Container>
    )
  }
}

export default MyApp