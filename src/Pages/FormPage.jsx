import React, { useState } from 'react'
import axios from "axios";

export default function FormPage() {

  let initdataobj={
    name: "",
    description : "",
    category : "",
    image : "",
    location : "",
    postedAt : "",
    price : ""
  }

  const postdata=async(postdata)=>{
    try{
      let res= await axios.post("https://ill-gold-hatchling-kilt.cyclic.app/postclassifieds",postdata)
      // let data=await res.json();
      console.log(res);
    }
    catch(er){
      console.log(er);
    }
  }

  const [state,setstate]=useState(initdataobj);

  const handleChnage=(event)=>{
    setstate({...state,
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    // console.log(state);
    postdata(state);
    alert("data added")
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"  placeholder='enter name'onChange={handleChnage}/>
      <input type="text" name="description"  placeholder='enter description'onChange={handleChnage}/>
      {/* <input type="text" name="category"  placeholder='enter category' onChange={handleChnage}/> */}
      <select name="category"  onChange={handleChnage}>
      {/* Clothing, Electronics, Furniture, Other) */}
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
        <option value="other">Other</option>
      </select>
      
      {/* <input type="text" name="image"  placeholder='enter image'onChange={handleChnage}/> */}
      <input type="file" name="image" id="" onChange={handleChnage}/>

      <input type="text" name="location"  placeholder='enter location'onChange={handleChnage}/>
      {/* <input type="text" name="postedAt"  placeholder='enter date'onChange={handleChnage}/> */}
      <input type="date" name="postedAt" id="" onChange={handleChnage}/>

      <input type="text" name="price"  placeholder='enter Price'onChange={handleChnage}/>
      <input type="submit" value="submit" />
    </form>
  )
}
