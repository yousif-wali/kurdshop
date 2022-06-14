import {images} from './Data'
export let title = "";
export let desc = "";

function Carousel(){
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
   
    <div className={id === 0 ? "carousel-item active": "carousel-item"} key={id}>
      <img src={require("./image/"+elem.src+".jpg")} alt={elem.alt} className="d-block" />
      <span style={{display: 'none'}}>{title = elem.title}</span>
      <span style={{display: 'none'}}>{desc = elem.desc}</span>
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