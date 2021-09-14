import React from 'react'

export default function ReportTable({ store }) {
    const workingHours = (['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
   
    // if (store.length===0){
    //     return (
    //       <h2>No Cookie Stands Available</h2>
    //     )
    //   }else{
    return (
        <div class="table-auto flex items-center justify-center">
            <table>
                <thead>
                    <tr>
                        <th class="px-4 py-2">Location</th>
                        {
                            workingHours.map(obj => {
                                return (
                                    <th class="px-4 py-2">{obj}</th>
                                )
                            })
                        }
                        <th class="px-4 py-2">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {store.map((item, key) => (
                        <tr key={`${key}`}>
                            <td className="border px-4 py-2">{item.location}</td>
                            {
                                item.hourly_sales.map((obj, key) =>
                                    <td key={`${key}`} className="border px-4 py-2">{obj}</td>
                                )}
                        </tr>))}
                </tbody>
            </table>
        </div>
    )
}
