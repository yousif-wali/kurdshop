import {images} from './Data'
import Tilt from "react-vanilla-tilt"

function Carousel(props){
  setTimeout(()=>{
  document.querySelectorAll(".carousel-item").forEach((elem)=>{
    elem.addEventListener("animationstart", ()=>{
      document.getElementById(props.vipId).classList.add("active");
      setTimeout(()=>{
        document.getElementById(props.vipId).classList.remove("active")
      }, 500)
    })
    elem.addEventListener("animationend", ()=>{
          if(elem.classList.contains("active")){
            try{ 
                document.getElementById(props.backgroundImage).src = require("./image/"+elem.getAttribute("data-src")+".jpg");
                document.getElementById(props.title).innerHTML = elem.getAttribute("data-title");
                document.getElementById(props.desc).innerHTML = elem.getAttribute("data-desc"); 
            }catch(e){
              console.log(e.message)
            }
    }
    })

    })
  }, 500);
    return(
      <div>
          <Tilt className="tilt" options={{ max : 45, perspective: 1000, scale: 1.1, transition:true, easing:"cubic-bezier(.03,.98,.52,.99)"}} >
            <div id="sales" className="carousel slide Tilt-inner" data-bs-ride="carousel">

<div className="carousel-indicators button-z" >
  <button type="button" data-bs-target="#sales" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#sales" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#sales" data-bs-slide-to="2"></button>
</div>
 <div className="carousel-inner">
{images.map((elem, id)=>{
    return(    
   
    <div className={id === 0 ? "carousel-item active": "carousel-item"} key={id} data-title = { elem.title} data-desc = {elem.desc} data-src = {elem.background}>
      <img src={require("./image/"+elem.src+".jpg")} alt={elem.alt} className="d-block" />
      <span id="user_name">User name:</span>
      </div>
    )

})}
 </div>



<button className="carousel-control-prev" type="button" data-bs-target="#sales" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#sales" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>
</Tilt>
        </div>
        
    )
}
export default Carousel