import React from 'react'
import './MainDash.css'
import Cards from '../component/Cards/Cards'
import Table from '../component/Table/Table'

const MainDash = () => {
  return (
    <div>
      <h1>Welcome Heman!</h1>
      <Cards/>
      <Table />
    </div>
  )
}

export default MainDash;