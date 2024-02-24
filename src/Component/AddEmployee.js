import React, { useState } from 'react'
import EmployeeService from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const[employee,setEmployee]=useState({
        id:"",
        firstName:"",
        lastName:"",
        emailid:"",
    });

   const changeFun=(e)=>{
     const value=e.target.value;
     setEmployee({employee,[e.target.name]: value});
};

   const nav=useNavigate();

   const save=(e)=>{
     
     EmployeeService.saveEmployee(employee).then((response)=>{
         console.log("Submitted")
          nav("/employeeList")
     }).catch((error)=>{
          console.log("ERROR")
     })

   }
 
   const clear=(e)=>{
    
     setEmployee({
          id:"",
          firstName:"",
          lastName:"",
          emailid:"",
     })
   }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8"> 
             <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Employee</h1>
             </div>
             <div className="items-center justify-center h-14 w-full my-4">
                  <label className="block text-gray-600 text-sm font-normal">First Name</label>
                  <input onChange={(e)=>changeFun(e)} type='text' className="h-10 w-96 border mt-2 px-2 py-2" name="firstName"
                  value={employee.firstName}></input>
             </div>
             <div className="items-center justify-center h-14 w-full my-4">
                  <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                  <input onChange={(e)=>changeFun(e)} type='text' name="lastName" value={employee.lastName} className="h-10 w-96 border mt-2 px-2 py-2 "></input>
             </div>
             <div className="items-center justify-center h-14 w-full my-4">
                  <label className="block text-gray-600 text-sm font-normal">Email</label>
                  <input onChange={(e)=>changeFun(e)} type='email' name="emailid" value={employee.emailid} className="h-10 w-96 border mt-2 px-2 py-2"></input>
             </div>
             <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                 <button onClick={()=>save()}className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700'>
                    Save</button>
                    <button  onClick={()=>clear()}className=' rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700'>
                    Clear</button>
             </div> 
        </div>

    </div>
  )
}

export default AddEmployee