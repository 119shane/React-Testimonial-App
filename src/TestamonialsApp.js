import React, {useState, useEffect} from 'react'
import Button from "./components/Button"
import Title from "./components/Title"
import './App.css';

import {BsFillPostcardFill} from "react-icons/bs"
import {FaUserEdit} from "react-icons/fa"
import {FaComments} from "react-icons/fa"


export default function TestamonialsApp() {

    const [testimonials, setTesimonials] = useState("")
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    },[testimonials])

    console.log(items)

  return (
    <div>
      <Title text="Testimonials App"/>
      <div style={{display: "flex", justifyContent:"space-around", alignItems: "center"}}>
        <Button 
            btn_classes="btn_big"
            text="Posts"
            onClick={()=>setTesimonials("Posts")}
            icon={<BsFillPostcardFill className='m-r-half'/>}
        />
        <Button 
            btn_classes="btn_big"
            text="Users"
            onClick={()=>setTesimonials("Users")}
            icon={<FaUserEdit className='m-r-half'/>}
        />
        <Button 
            btn_classes="btn_big"
            text="Comments"
            onClick={()=>setTesimonials("Comments")}
            icon={<FaComments className='m-r-half'/>}
        />
      </div>
      <h1 className='sub_title text_center m-t1'>{!testimonials ? "Select One from Above" : testimonials}</h1>

      <div style={{display: "flex", flexDirection: "column"}}>{!items
        ? null
        : items.map(item=>(
            <div style={{width: "500px", border: "1px solid black", padding: "5px 10px", textAlign:"center", margin: "20px auto", boxShadow: "2px 2px 5px greenyellow"}} key={item.id}>

                <div style={{height: "26px", width: "26px", border: "1px solid greenyellow", borderRadius: "50%", display: "grid", placeContent: "center", marginBottom: '0'}}>
                    <small>{item.id}</small>
                </div>
                <h2 style={{marginTop:"0px"}}>{item.title}</h2>
                <h4>{item.name}</h4>
                <p style={{color:"#57e83a"}}>{item.body}</p>
                <small style={{color:"#79fa5f"}}>{item.email}</small>

            </div>
        ))}</div>

    </div>
  )
}

//****************************
//                            CODE EXPLAIN ****************************//
// 
// 
// 
//  
//
/// ***////////////////////////////////////////////////////////////////////////*** ///


