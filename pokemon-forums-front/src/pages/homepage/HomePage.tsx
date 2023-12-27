import React from 'react'
import AddPost from '../../components/AddPost/AddPost'
import ViewPost from '../../components/ViewPost/ViewPost'

interface Props {}

function HomePage({}: Props) {
  return (
    <div>HomePage
      <AddPost></AddPost>
      <ViewPost></ViewPost>
    </div>
  )
}

export default HomePage