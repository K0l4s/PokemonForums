import React from 'react'
import AddPost from '../../components/AddPost/AddPost'
import ViewPost from '../../components/ViewPost/ViewPost'
import './HomePage.css'
interface Props {}

function HomePage({}: Props) {
  return (
    <div className='HomePage'>
      <AddPost></AddPost>
      <ViewPost></ViewPost>
    </div>
  )
}

export default HomePage
