import React from "react"
import {FaTimes , FaPen , FaRegCircle, FaCircle, FaCross } from 'react-icons/fa'

const Icon = (props) => {
   switch (props.name) {
       case "circle":
          return <FaCircle className="icons"></FaCircle> 
           
          case "cross":
            return <FaTimes className="icons"></FaTimes> 
               
       default:
          // return <FaPen className="icons"></FaPen>
          return ""
           
   }
}

export default Icon;