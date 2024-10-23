import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home=()=>{
    let[data,setdata]=useState([])
    let[f,setf]=useState(true)
    useEffect(()=>{
        axios.get("http://localhost:5000/getdata").then((res)=>{
            setdata(res.data)
        })
    },[f])
    let del=(hno)=>{
        axios.delete(`http://localhost:5000/del/${hno}`).then((res)=>{
            setf((f)=!f)
        })
    }
    return(
        <div className='con'>
            <div className='tablecon'>
            <table border={1}>
                <tr className='head'>
                    <th>Hno</th>
                    <th>Name</th>
                    <th>Phno</th>
                    <th>Gender</th>
                    <th>Sub1</th>
                    <th>Sub2</th>
                    <th>Sub3</th>
                    <th>Sub4</th>
                    <th>Total</th>
                   <th>Delete</th>
                    
                </tr>
                {
                    data.map((i)=>{
                        return(<tr className='body'>
                            <td>{i._id}</td>
                            <td>{i.name}</td>
                            <td>{i.phno}</td>
                            <td>{i.gen}</td>
                            <td>{i.sub1}</td>
                            <td>{i.sub2}</td>
                            <td>{i.sub3}</td>
                            <td>{i.sub4}</td>
                            <td>{i.sub1+i.sub2+i.sub3+i.sub4}</td>
                            <td>
                                <button onClick={()=>del(i._id)}> delete</button>
                            </td>
                        </tr>)
                    })
                }
            </table>
            </div>
        </div>
    )
}
export default Home