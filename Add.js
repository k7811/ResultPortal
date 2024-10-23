import axios from 'axios'
import React,{useState} from 'react'

const Add = () => {
    let [data,setdata]=useState({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
    let [status,setstatus]=useState("")
    let fun=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        axios.post("http://localhost:5000/add",data).then((res)=>{
            setstatus(res.data.msg)
            if(res.data.msg!=='not added'){
                setdata({"_id":"","name":"","phno":"","gen":"","sub1":"","sub2":"","sub3":"","sub4":""})
            }
        })
    }
    return(
   <div className='formcon'>
    <div className='form'>
    <div>{status}</div>
   id: <input type='text' name="_id" onChange={fun} value={data._id}/>
   name: <input type='text' name="name" onChange={fun} value={data.name}/>
   phno: <input type='text' name="phno" onChange={fun} value={data.phno}/>
   <div>
  Gender    <input type='radio' name="gen" value="male" onChange={fun} checked={data.gen==="male"}/>m
              <input type='radio' name="gen" value="female" onChange={fun} checked={data.gen==="female"}/>f</div>
<p></p>
  sub1:  <input type='text' name="sub1" onChange={fun} value={data.sub1}/>
  sub2: <input type='text' name="sub2" onChange={fun} value={data.sub2}/>
  sub3:  <input type='text' name="sub3" onChange={fun} value={data.sub3}/>
  sub4:  <input type='text' name="sub4" onChange={fun} value={data.sub4}/>
  
    <button onClick={add}>Add</button>
</div>
   </div>
  )
}

export default Add