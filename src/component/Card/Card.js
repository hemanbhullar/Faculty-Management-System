import React, { useState } from 'react'
import "./Card.css"
import {LayoutGroup} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';

import {UilTimes} from '@iconscout/react-unicons'

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    
  return (
    <LayoutGroup>
        {
            expanded?(<ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>)
            : (<CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>)
        }
    </LayoutGroup>
  )
}

//CompactCard
function CompactCard({param, setExpanded}){
    const Png = param.png;
    return(
        <div className='CompactCard' style={{
            background : param.color.backGround,
            boxShadow : param.color.boxShadow
        }} onClick={setExpanded}>
            <div className='radialBar'>
                <CircularProgressbar value={param.barValue} text={`${param.barValue}%`}/>
                <span>{param.title}</span>
            </div>
            <div className='detail'>
                <Png/>
                <span>{param.value}</span>
                <span> Last 24 hours</span>
            </div>
        </div>

    )
}

//ExpandedCard
function ExpandedCard({param, setExpanded}){
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enables: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0, 
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                color: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth", 
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy",
                },
            },
            grid: {
                show:true,
            },
            xaxis: {
                type: "date",
                categories:[
                    "2018-09-19",
                    "2019-09-19",
                    "2020-09-19",
                    "2021-09-19",
                    "2022-09-19",
                    "2022-09-19",
                    "2023-09-19",
                  ],
            },
        },
    };
    // const chartData = [
    //     {
    //       name: param.title,
    //       data: param.series.,
    //     },
    //   ];
    return(
        <div className='ExpandedCard' style={{background: param.color.backGround, boxShadow: param.color.boxShadow}}>
            <div><UilTimes onClick={setExpanded} /></div>
            <span>
                {param.title}
            </span>
            <div className='chartContainer'>
                <Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span>Last 5 years</span>
        </div>
    )
}

export default Card