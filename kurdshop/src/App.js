import Carousel, {title, desc} from './Carousel'

function App() {
  function getTitles(element){
   element.innerHTML = document.getElementsByClassName('carousel-item active')[0].getAttribute("data-title")
  }
  return (
    <div className="container-fluid row">
      <span className="col-lg-5 offset-0 col-md-5 col-sm-12">
        <h3>{title? title: "Title"}</h3>
        <p>{desc? desc: "Description"}</p>
        </span>
      <span className="col-lg-7 offset-0 col-md-7 col-sm-12"><Carousel /></span>
      <div>
        Welcome!!
      </div>
    </div>
  );
}

export default App;
