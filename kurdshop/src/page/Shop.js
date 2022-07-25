import {categories} from "./../Data/Categories"
function Sublist(props){
   return categories[props.item].sublist.map((list, index)=>{
      return(
        <li key={index}>{list.category}</li>
      )
    })
    
}
export default function Shop(){

    return (
      <>
        <section id="Header">
          <section id="Category"><ul>
            {
             // fetch("./Data/Categories.json").then(res=>res.json()).then(res=>{console.log(res)}).catch(e=>{console.error(e.message)})
             categories.map((res, index)=>{
            return (
              
                <li key={index}>{res.category}
                {
                  res.sublist && <ul><Sublist item={index}/></ul>
                }
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