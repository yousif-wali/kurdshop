// import React, {useState, useEffect} from 'react';
import "./css/style.css"
export default function ShopPosts(props){
  console.log(props.saleposts)
    return(
        <>
        <section className="post">
          {props.saleposts.map((item, index)=>{
            return(
              <article key={index}>
              <h5>{item.category}</h5>
              <img src={item.files}/>
              <h6>${item.price}</h6>
              </article>
            )
          })}
        </section>
      </>
    )
}