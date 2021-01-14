import React from 'react'
import {Link} from 'react-router-dom'
const data = [
 {
   id: 1,
   text: "home",
   url: "/",
 },
 {
   id: 2,
   text: "cart",
   url: "/cart/",
 },
]

const tempLinks = data.map(link => {
 return (
   <li key={link.id}>
     <Link to={link.url}>{link.text}</Link>
   </li>
 )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
 return (
   <ul className={`page-links ${styleClass ? styleClass : ""}`}>
     {tempLinks}
   </ul>
 )}