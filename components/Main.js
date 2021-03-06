import React, { useState } from "react";
import Createform from "./Createform";
import ReportTable from "./ReportTable";

export default function Main() {
  const [store, setStore] = useState([])
  // const [sales ,setSale]=useState([])
  const[totals,setTotal]=useState([])

  function handleForm(event) {
    event.preventDefault();
    const store_loc = {
      location: event.target.location.value,
      minimum: event.target.minimum.value,
      maximum: event.target.maximum.value,
      average: event.target.average.value
    }

    const hours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
    const hourly_sales=hours.map(()=>{
      return Math.floor((store_loc.average*((Math.random()*(store_loc.maximum-store_loc.minimum)+store_loc.minimum))))
    })
    // console.log(hourly_sales)
    
    
    const objectData={
      location:event.target.location.value,
      hourly_sales:hourly_sales,
      sum:hourly_sales.reduce((a, b) => a + b, 0)
      // sumcol:hourly_sales.reduce((a, a) => a + a, 0)

    }
    setStore(store => [...store, objectData]) 
    // console.log(objectData.sum)
    //  console.log(objectData)

    // let total_sum=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    // total_sum=total_sum.map((item,idx)=>{
    //   if (idx===total_sum.length-1){
    //       return item + objectData.sum
    //   }
    //   })
      // console.log('ts',total_sum)
      // setbranchestotals(total_sum)
      // return store
  // })

}
  
      return (
        <div>
          <Createform handleForm={handleForm}/>
          <ReportTable store={store} totals={totals}/>
        </div>
 
  )
}
