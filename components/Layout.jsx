import { useState, useCallback } from 'react'
import { Layout, Icon, Input, Avatar } from 'antd'

const {Header, Content, Footer } = Layout

const githubStyle = {
  color: 'white',
  fontSize: 40,
  marginTop: 12
}

export default ({children}) => {

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
        <div className="header-content">
          <div className="header-left">
            <Icon type="github"  style={githubStyle} /> 
          </div>
          <div>
            <Input
              placeholder="搜索仓库"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div >
            <Avatar  icon="user" />
          </div>
        </div>
        
      </Header>
      <Content>{children}</Content>
      <style jsx>
        {`
          .header-content {
            display:flex;
            justify-content: space-between;
          }
         

        `}
      </style>
    </Layout>
  )
}