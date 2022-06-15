import {images} from './Data'
function Carousel(props){
  setTimeout(()=>{
  document.querySelectorAll(".carousel-item").forEach((elem)=>{
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
            <div id="sales" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-indicators">
  <button type="button" data-bs-target="#sales" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#sales" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#sales" data-bs-slide-to="2"></button>
</div>
 <div className="carousel-inner">
{images.map((elem, id)=>{
    return(    
   
    <div className={id === 0 ? "carousel-item active": "carousel-item"} key={id} data-title = { elem.title} data-desc = {elem.desc} data-src = {elem.background}>
      <img src={require("./image/"+elem.src+".jpg")} alt={elem.alt} className="d-block" />
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

        </div>
    )
}
export default Carousel