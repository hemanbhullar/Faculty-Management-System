import React from 'react'
import HeroEdu from '../ProfileComponents/HeroEdu'
import EducationList from '../ProfileComponents/EducationList'

const EducationalBackground = () => {
  return (
    <div class="container-fluid">
      <h1 style={{textAlign:'center', backgroundColor:'ButtonShadow', fontFamily:'monospace'}}>Education Background</h1>
      <HeroEdu/>
      <EducationList/>
    </div>
  )
}

export default EducationalBackground