import React from 'react'
import AddPost from '../../components/AddPost/AddPost'
import ViewPost from '../../components/ViewPost/ViewPost'
import './HomePage.css'
import { FcAssistant } from "react-icons/fc";

interface Props {}

function HomePage({}: Props) {
  return (
    <div>HomePage
      <FcAssistant />
      <AddPost></AddPost>
      <ViewPost></ViewPost>
    </div>
  )
}

export default HomePage
