import { withRouter } from 'next/router'

const Post = withRouter(props => (
  <h1>{props.router.query.title}sssscccc</h1>
))

export default Post