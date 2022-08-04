import {categories} from "./../Data/Categories"
import {useEffect, useState} from "react"
import axios from '../api/axios';
import Posts from "./../Data/ShopPosts"
import { useAuth0 } from "@auth0/auth0-react";
function Sublist(props){
   return categories[props.item].sublist.map((list, index)=>{
      return(
        <li key={index} onClick={requestHeader} data-index={index} data-type="sublist">{list.category}</li>
      )
    })
    
}
function MobileSublist(props){
  return categories[props.item].sublist.map((list, index)=>{
     return(
       <span key={index} onClick={requestHeader} data-index={index} data-type="sublist">{list.category}</span>
     )
   })
   
}
const soloopen = e =>{
  if(e.target.parentNode?.open){
    setTimeout(()=>{e.target.parentNode.open = false;}, 10)
  }
    const close = e =>{
      e.open = false;
  }
  let details = document.querySelectorAll("details");
  details.forEach(elem=>{elem.addEventListener("click", close(elem))})

}
const requestHeader = e =>{
  
  let id =e.target.getAttribute("data-index");
  let sublist = e.target.getAttribute("data-type");
  let parent = e.target.parentNode.getAttribute("data-index") || e.target.parentNode.parentNode.getAttribute("data-index");
  if(sublist){
    let sublistRequest = categories[parent].sublist[id].request;
    if(sublistRequest !== undefined){
    window.location.href = window.location.origin + window.location.pathname + "?req="+ sublistRequest;
    }
  }else{
    try{
  if( categories[id].request !== undefined ){
    window.location.href = window.location.origin + window.location.pathname + "?req="+ categories[id].request
  }
}catch(e){
  
}
}
}
export default function Shop(){
  let bars = '≡'
  let close = 'x';
 function menu(elem){
   if(elem.target.innerHTML === bars)elem.target.innerHTML = close;
   else elem.target.innerHTML = bars;
   document.getElementById("MobileCategory").classList.toggle("active");
  // document.getElementById("navigation").classList.toggle("active");
  
  }
  const [posts, setPosts] = useState([])
  const { isAuthenticated } = useAuth0()
  useEffect(() => {
    axios.get("/saleposts/log").then(res => setPosts(res.data))
  }, []);
    return (
      <>
        <section id="Header" className="Header" >
          <section id="Category">
            <ul>
            {
             categories.map((res, index)=>{
            return (
              
                <li key={index} data-index={index}  onClick={requestHeader} >{res.category}
                {
                  res.sublist && <ul><Sublist item={index}/></ul>
                }
                </li>
           
             )
            })
           } </ul>
                 
          </section>

          <section id="MobileCategory" dir={document.documentElement.getAttribute("lan") === "kurd"? "ltr": "rtl"}>
          <section id="MobileCategory-dropdown">
          {
             categories.map((res, index)=>{
            return (
              
                <details key={index} data-index={index} onClick={(e)=>{requestHeader(e); soloopen(e);}} >
                  <summary>{res.category}</summary>
                {
                  res.sublist && <MobileSublist item={index}/>
                }
                </details>
           
             )
            })
           }</section>
          </section>
          <section id="Post">
            {
             isAuthenticated && <button onClick={(e)=>{e.preventDefault();window.location="/page/Post"}}>کاڵاکەت دانە</button>        
            }
             </section>
        </section>
        <section id="Main">
          <section id="Posts">
          <span className="menu" onClick={menu}>{bars}</span>
            <Posts  saleposts={posts}/>
          </section>
          <section id="Promotions">
            <section id="Vip">

            </section>
            <section id="Ad">

            </section>
          </section>
        </section>
      </>
      );
}