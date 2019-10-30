import React, { useState } from 'react'

const ListItem = ({title, setClicked }) => {
  return (
    <li>
      <button
        onClick={
          () => {
            setClicked(title)
          }
        }>
          {title}
      </button>
    </li>
  )
}

const List = props => {
  const [lastButton, setLastButton] = useState('')

  return (
    <div>
      <h1>{lastButton}</h1>
      <ul>
        <ListItem
          title="create"
          setClicked={setLastButton}
        />
        <ListItem
          title="ddd"
          setClicked={setLastButton}
        ></ListItem>
      </ul>
    </div>
  )
}

export default List