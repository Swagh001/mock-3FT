import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {store} from '../Redux/store';
import {useSelector} from "react-redux"
import {fetchdata} from "../Redux/action"
import {useDispatch} from "react-redux"

export default function AllDataPage() {

  const [alldata,setAlldata]=useState([]);
  const [fileteVal,setfileteVal]=useState("");

  const storeData=useSelector((state)=>state);
  // console.log(storeData);
 const dispatch=useDispatch();
  const getdata= async()=>{
    try{
      let res= await axios.get("https://ill-gold-hatchling-kilt.cyclic.app/BrowseClassifieds");
      let data= await res.data;
      // console.log(data)
      // dispatch(fetchdata(data.alldata));
      setAlldata(data.Alldata)
    }
    catch(err){
      console.log(err)
    }
  }

  const getdata2= async(val)=>{

    try{
      let res= await axios.get(`https://ill-gold-hatchling-kilt.cyclic.app/BrowseClassifieds?category=${val}`);
      let data= await res.data;
      // console.log(data)
      // setAlldata(data.Alldata)
    }
    catch(err){
      console.log(err)
    }
  }


  useEffect(()=>{
    if(fileteVal!==""){
      getdata2(fileteVal);
    }else{
      getdata();
    }
    console.log(storeData);
  },[fileteVal])
  return <>

  <select name="category"  onChange={(event)=>{setfileteVal(event.target.value)}}>
    {/* Clothing, Electronics, Furniture, Other) */}
      <option value="clothing">Clothing</option>
      <option value="electronics">Electronics</option>
      <option value="furniture">Furniture</option>
      <option value="other">Other</option>
    </select>


  <div style={{display:"flex", gap:"5px"}}>
  {
    alldata?.map((elem,index)=>{
      return <div key={elem._id}>
        <img src={elem.image} alt="img" width={"200px"} height={"200px"}/>
        <h3>{elem.name}</h3>
        <p>{elem.category}</p>
        <p>{elem.description}</p>

        <p>{elem.location}</p>
        <p>{elem.postedAt}</p>

        <h2>Rs. {elem.price}/-</h2>
        <button>Buy</button>

      </div>
    })
  }

  </div>
  </>
}
