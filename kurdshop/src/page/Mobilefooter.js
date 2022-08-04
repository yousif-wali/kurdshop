export default function MobileFooter(){
    return (
        <footer className="mobile-footer">
            <section>
                <button onClick={()=>{window.history.back();}}>گەڕانەوە</button>
            </section>
            <section>
        <button onClick={(e)=>{e.preventDefault();window.location="/page/Post"}}>کاڵاکەت دانە</button>
            </section>
            <section>
                <button onClick={(e)=>{e.preventDefault();window.location="/"}}>سەرەکی</button>
            </section>
        </footer>
    )
}