import "./page.css";
import {categories} from "./../Data/Categories"
function Sublist(props){
    return categories[props.item].sublist.map((list, index)=>{
       return(
         <option key={index} data-index={index} data-type="sublist">{list.category}</option>
       )
     })
     
 }
 function sendingPost(e){
    e.preventDefault()
 }
export default function post(){
    return(
        <main className="container">
        <div className=" offset-0 col-12 posting bg-success rounded d-flex flex-lg-row-reverse justify-content-between flex-sm-column flex-md-column" dir={document.documentElement.getAttribute("lan") === "kurd"? "ltr": "rtl"}>
            <section className="posting-reklam">
                Reklam
            </section>
            <section className="mt-md-4 mt-4 mt-lg-0 input-info">
                <form onSubmit={sendingPost}>
            <span>
                <label htmlFor="name">ناوی كاڵا:</label>
                <input id="name" type="text" className="width-100"/>
            </span>
            <span>
                <label htmlFor="description">پێناسەی كاڵا:</label>
                <textarea id="description"></textarea>
            </span>
            <span>
                <label htmlFor="price">نرخی كاڵا</label>
                <input id="price" type="number" min="0" step="1"/>
            </span>
            <span>
                <label htmlFor="category">جۆری کاڵا</label>
                <select id="category">
                {
             categories.map((res, index)=>{
            return (
              
                <optgroup key={index} label={res.category} value={res.category}>
                {
                  res.sublist && <Sublist item={index}/>
                }
                </optgroup>
           
             )
            })
           }
                </select>
            </span>
            <span>
                <label>باروودۆخی كاڵا:</label>
                <span className="d-inline-block quality">
                    <span>
                    <label htmlFor="new">نوێ</label>
                    <input id="new" type="radio" name="quality" value="new"/>
                    </span>
                    <span>
                    <label htmlFor="seminew">وەک نوێ</label>
                    <input id="seminew" type="radio" name="quality" value="seminew"/>
                    </span>
                    <span>
                    <label htmlFor="old">کۆن</label>
                    <input id="old" type="radio" name="quality" value="old"/>
                    </span>
                </span>
            </span>
            <span>
                <label>وێنە/کانی کاڵا:</label>
                <input type="file" name="upload" id="upload" accept="image/*" />
            </span>
            <span>
                <button>زیاد کردنی كاڵا</button>
            </span>
            </form>
            </section>
        </div>
        </main>
    )
}