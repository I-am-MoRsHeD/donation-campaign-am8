// eslint-disable-next-line no-unused-vars
import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';




const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Statistics(){
    const[totalData,setTotalData]=useState(0)
    useEffect(()=>{
        const storedData =localStorage.getItem('cards')?JSON.parse(localStorage.getItem('cards')):[]
        setTotalData(storedData.length*100/12)

    },[])
    const data = [
        { name: 'Donated', value: totalData },
        { name: 'Reserved', value: 100-totalData }
        
      ];
  

   
    return (
      <div className='flex justify-center items-center'>
        <ResponsiveContainer width={500} height={500}>
        <PieChart width={500} height={500} >
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      </div>
      
    );
  
}
