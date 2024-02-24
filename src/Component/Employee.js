import React from 'react'

const Employee = ({employe,cancel}) => {
           
  return (
            
            

        <tr key={employe.id}>
                <td class="text-black text-center p-5 whitespace-nowrap">{employe.firstName}</td>
                <td class="text-black text-center p-5 whitespace-nowrap">{employe.lastName}</td>
                <td class="text-black text-center p-5 whitespace-nowrap">{employe.emailid}</td>
                <td class="text-black text-center p-5 whitespace-nowrap">
                   <button class="p-2 rounded bg-slate-400 m-2 text-medium">Edit</button>
                   <button 
                   onClick={(id,e)=>cancel(id,e)}
                   class="p-2 rounded bg-slate-400 m-2 text-medium">Delete</button>
                </td>
            </tr>
    
  )
}

export default Employee