import settingimg from "../icons/Settings.png"
import seachIcon from "../icons/Search.png"
import Trading from "./Trading";
function SideBarRight() {
return(
 <section className="seconSideBare">
    <form action="" className="seach">
    <i><img src={seachIcon} alt="" /></i> <input  type="seach" placeholder="Serach Twitter" /> 
    </form>
    <div className="trading">
    <h2>Trends for you <i><img src={settingimg} alt="" /></i> </h2>
    <Trading/>
    <Trading/>
    <Trading/>
    <Trading/>
    <div>
    <button className="btnShowmore">Show more</button>
    </div>
    </div>
   
    

 </section>
); 
}
export default SideBarRight