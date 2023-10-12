import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FeedbackForm from '../component/Feedback/FeedbackForm'
import Submissions from '../component/Feedback/Submission'
import StickyHeader from '../component/Feedback/StickyHeader'
import './FeedbackFormStyle.css'

const Feedback = () => {
  return (
    <div>
      <StickyHeader/>
      <Routes>
        <Route path="/" element={<FeedbackForm/>}/>
        <Route path="submissions" element={<Submissions />} />
        <Route path="submission/:id" element={<Submissions />} />
       </Routes>
    </div>
  )
}

export default Feedback