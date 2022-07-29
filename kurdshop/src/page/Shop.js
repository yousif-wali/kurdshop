import {categories} from "./../Data/Categories"
import Profile from "./../Profile"
import {useEffect, useState} from "react"
import axios from '../api/axios';
import Posts from "./../Data/ShopPosts"
function Sublist(props){
   return categories[props.item].sublist.map((list, index)=>{
      return(
        <li key={index} onClick={requestHeader} data-index={index} data-type="sublist">{list.category}</li>
      )
    })
    
}
const requestHeader = e =>{
  let id =e.target.getAttribute("data-index");
  let sublist = e.target.getAttribute("data-type");
  let parent = e.target.parentNode.parentNode.getAttribute("data-index");
  if(sublist){
    let sublistRequest = categories[parent].sublist[id].request;
    if(sublistRequest != undefined){
    window.location.href = window.location.origin + window.location.pathname + "?req="+ sublistRequest;
    }
  }else{
  if( categories[id].request != undefined ){
    window.location.href = window.location.origin + window.location.pathname + "?req="+ categories[id].request
  }
}
}
export default function Shop(){
  const [posts, setPosts] = useState([])
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
              
                <li key={index} data-index={index} onClick={requestHeader} >{res.category}
                </li>
           
             )
            })
           } </ul>
                 
          </section>
          <section id="Post">
             <button>کاڵاکەت دانە</button>        
          </section>
        </section>
        <section id="Main">
          <section id="Posts">
            <Posts  saleposts={posts}/>
            <Profile/>
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