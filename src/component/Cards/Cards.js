import React from 'react'
import './Cards.css'
import { CardsData } from '../Data/Data'
import Card from '../Card/Card'
import TimeAndWeatherCard from '../Card/TimeAndWeatherCard'

const Cards = () => {
  return (
    <div className='Cards'>
      <div className='parentContainer'>
        <div>
      <TimeAndWeatherCard />
      </div>
      </div>
        {CardsData.map((card, id)=>{
            return(
                <div className='parentContainer'>
                    <Card 
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards