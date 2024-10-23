import React, { useState } from 'react'
import axios from 'axios'
const Result = () => {
  let [hno,sethno]=useState()
  let [err,seterr]=useState("")
  let [data,setdata]=useState({})
  let fun=(e)=>{
    sethno(e.target.value)
  }
  let getres=()=>{
    axios.get(`http://localhost:5000/getres/${hno}`).then((res)=>{
      if(res.data)
      {
        setdata(res.data)
        seterr("")
      }
      else{
        seterr("check hno")
        setdata({})
      }
    })
  }
  return (
    <div className='getresult'>
      {
      err!==" " && <div className='err'>{err}</div>}
      <input type='text' onChange={fun} />
      <button onClick={getres}> Getresult </button>
      {
        data._id!=undefined && <table>
          <tr>
            <th>hno</th>
            <td>{data._id}</td>
          </tr>
          <tr>
            <th>name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>phno</th>
            <td>{data.phno}</td>
          </tr>
          <tr>
            <th>gender</th>
            <td>{data.gen}</td>
          </tr>
          <tr>
            <th>sub1</th>
            <td>{data.sub1}</td>
          </tr>
          <tr>
            <th>sub2</th>
            <td>{data.sub2}</td>
          </tr>
          <tr>
            <th>sub3</th>
            <td>{data.sub3}</td>
          </tr>
          <tr>
            <th>sub4</th>
            <td>{data.sub4}</td>
          </tr>
          <tr>
            <th>total</th>
            <td>{data.sub1+data.sub2+data.sub3+data.sub4}</td>
          </tr>
        </table>
      }
      
    </div>
  )
}

export default Result