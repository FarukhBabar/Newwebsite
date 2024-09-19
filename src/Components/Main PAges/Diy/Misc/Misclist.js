import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Misclist = () => {
    const [user, setUsers] = useState([]);
    

    const setUsersData = async() =>{
        let result = await fetch("https://api.homeessentialshive.co.uk/api/v1/data/lynwooduser")
        result = await result.json()       
        setUsers(result)        
        console.log(result)
    }
  
  
      useEffect(()=>{
        setUsersData()
    },[])
      const deleteuser = async(id)=>{
          // console.log(id)
          try {
              let result= await fetch(`https://api.homeessentialshive.co.uk/api/v1/data/lynwooduserid/${id}`,{
            method:"delete"
         
          })
          result= await result.json()
          if(result){
            setUsersData()
          }
          
         
      
          } catch (error) {
              alert("Error in deleting data")
          }
          
          
        }
  return (
    <div>
        
    <div className='container w-75'>
           <h4 className='my-4 text-center text-warning display-4 fw-bold'>List of Lynwwood Products</h4>
           <Link to="/lynwoodform" ><button className='btn btn-success mb-2 w-10'>+ Add New Product </button></Link>  
           <table class="table table-striped table-hover">
                 <thead>
                     <tr className='btn-dark text-light text-center'>
                         <th scope="col">#</th>
                         <th scope="col">Name</th>
                         <th scope="col">Title</th>
                         <th scope="col">Price</th>
                         <th scope="col">Image</th>
                         <th scope="col">Operations</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         user.map((ele,ind)=>{
                             return(
                                 <>
                                     <tr>
                                         <th scope="row">{ind+1}</th>
                                         <td>{ele.name}</td>
                                         <td>{ele.title}</td>
                                         <td>{ele.price}</td>
                                         <td> {ele.image && (
                              <img 
                            src={`https://api.homeessentialshive.co.uk/${ele.image}`} 
                                     alt={ele.name} 
                                         className='img-fluid' 
                                    style={{ height: '70px', width: '100px' }}
                                          />
                               )}</td>
                                         <td>
                                             <Link to={`/listlynwood/${ele._id}`} className='btn btn-success'>Edit</Link>
                                             <a onClick={()=>deleteuser(ele._id)} className='btn btn-danger ms-2'>Delete</a>
                                         </td>
                                     </tr>
                                 </>
                             )
                         })
                     }
     
                 </tbody>
         </table>
     
     
         </div>


</div>
  )
}

export default Misclist; 
 