import { useState, useCallback } from 'react'
import { Layout, Icon, Input, Avatar } from 'antd'
// import { content } from 'react-redux'

const { Header, Content, Footer } = Layout

import Container from './Container'

const githubStyle = {
  color: 'white',
  fontSize: 40,
  marginTop: 12
}


function MyLayout ({ children }) {

  const [search, setSearch] = useState('')
  const handleSearch = useCallback(
    event => {
      setSearch(event.target.value)
    },
    [setSearch]
  )

  return (
    <Layout>

      <Header>
        <Container renderer={<div className="header-content"></div>}>
          <div className="header-left">
            <div>
            <Icon type="github" style={githubStyle} />
            </div>
            <div>
            <Input
              placeholder="搜索仓库"
              value={search}
              onChange={handleSearch}
            />
          </div>
          </div>

          <div>
            <Avatar icon="user" />
          </div>
        </Container>

      </Header>
      <Content>
        <Container>
          {children}
        </Container>
      </Content>
      <style jsx>
        {`
          .header-content {
            display:flex;
            justify-content: space-between;
          }
          .header-left {
            display: flex;
            flex: 1;
          }
         
        `}
      </style>
      <style jsx global>
        {`
          #__next {
            height: 100%;
          }
          .ant-layout-header {
            padding: 0;
          }
        `}
      </style>
    </Layout>
  )
}

export default MyLayout