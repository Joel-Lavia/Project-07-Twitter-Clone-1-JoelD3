import data from "../Models/Data";
import settingimg from "../icons/Settings.png"
import seachIcon from "../icons/Search.png"
import cnn from "../images/tweet-profile-photo.png";
import nytimes from "../images/Tweet2.png";
import twetterMascote from "../images/MascoteImg.png";

import Trading from "./Trading";
import ProfilSetting from "./ProfilSetting";
function SideBarRight() {
const tweetFollow = data.map((allNameTweet) => {
   return(
      <div key={allNameTweet.id}>
      <ProfilSetting nameTweet={allNameTweet.nomTweet} imgProfilSidebaLeft={allNameTweet.avatar} tweetLien={'@nytimes'} certification={allNameTweet.certification} />
      </div>
   );
})
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

    <div>

    <div className="follow">
    {tweetFollow.shift()}
    <button className="button">Follow</button>
    </div>

    <div className="follow">
    {tweetFollow.shift()}
    <button className="button">Follow</button>
    </div>

     <div className="follow">
     {tweetFollow.shift()}
     <button className="button">Follow</button>
     </div>

    </div>
    
 </section>
); 
}
export default SideBarRight