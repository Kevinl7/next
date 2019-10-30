import { withRouter } from 'next/router'

function Search({router}) {
  return (
    <span>{router.query.query}</span>
  )
}

Search.getInitialProps = async ctx => {
  const { query, sort, page } = ctx.query
  if (query) {
    return {
      repos: {
        total_count: 0
      }
    }
  }

  let result = await getData()

  return result
}
function getData () {
  return {
    data: {
      list: [
        {
          name: '111'
        }
      ]
    }
  }
}

export default withRouter(Search)