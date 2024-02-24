import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService';
import Employee from './Employee';
const EmployeeList = () => {

    const navigate=useNavigate()

    const [employees,setEmployees]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
          const fetchData = async()=>{

            setLoading(true)
            try{
                 const response=await EmployeeService.getAllEmployee();
                 setEmployees(response.data)
            }
            catch(error){

            }
            setLoading(false);
          }
          fetchData();
    },[])

    const cancel=(id,e)=>{
                  
                   EmployeeService.delete(id).then((res)=>{
                        if(employees){
                          setEmployees((prevElement)=>{
                            return prevElement.filter((employee)=> employee.id!==id)
                          })
                        }
                   });           
    }

  return (
    <div class="container mx-auto my-6">
    <div class="h-12 ">
        <button onClick={()=>navigate("/addEmployee"
        )} class="rounded items-center bg-slate-600 p-2 text-white">Add Employee</button>
    </div>
    <div class="flex shadow border-b">
  
    <table class="min-w-full ">
        <thead class="bg-yellow-300">
            <th class="text-center text-gray-500 px-2 py-4">First Name</th>
            <th class="text-center text-gray-500 px-2 py-4">Last Name</th>
            <th class="text-center text-gray-500 px-2 py-4">Email</th>
            <th class="text-center text-gray-500 px-2 py-4">Action</th>
        </thead>
        {!loading && (
         
        <tbody>
          {employees.map((employee)=>(
            <Employee employe={employee} cancel={cancel} key={employee.id}/>
            ))}
        </tbody>
           
        )}
        
    </table>
    
    </div>
    
    </div>
  )
}

export default EmployeeList