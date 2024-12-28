"use client"

import React, { useEffect, useState } from 'react'
import styles from './activities.module.css'


const fetchActivities = async () => {
  const response = await fetch("http://backend.default.svc.cluster.local:8000",
    {
    method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  console.log("hello")
  return response.json()
}

const Page = () => {
  const [data, setData] = useState([]);
  // console.log(fetchActivities())
  useEffect(() => {
    fetchActivities().then((res) => setData(res.activities))}, []
  )
  return (
    <div>
      {
        data.map((item)=> <div className={styles.itemContainer} key={item.title}>
          <h5 className={styles.itemTitle}>{item.title}</h5>
          <p className={styles.itemDescription}>{item.description}</p>
          <span className={styles.itemDate}>{item.date}</span>
        </div>)
      }
    </div>
    
  )
}

export default Page