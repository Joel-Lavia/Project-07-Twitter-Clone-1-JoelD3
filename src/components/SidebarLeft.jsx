import { NavLink } from "react-router-dom";
import tweet from "../icons/Twitter.png";
import home from "../icons/Home-Fill.png";
import explor from "../icons/Explore.png";
import notification from "../icons/Group.png";
import messages from "../icons/Messages.png";
import bookMark from "../icons/Bookmarks.png";
import list from "../icons/Lists.png";
import profilTweet from "../icons/Profile.png";
import profilePhoto from "../images/profile-photo.png"
import more from "../icons/More.png";
import privateImg from "../images/Private.png"

import ProfilSetting from "./ProfilSetting";

function SidebarLeft() {

  return (
    <section className="sidebarSection">

     <div className="sidebar">
      {/* <NavLink></NavLink> */}
      <button className="sidebarbtn"><img src={tweet} alt="btn Tweeter" /></button>
      <button className="sidebarbtn"><img src={home} alt="btn home" /><NavLink to={'/Home'} className={'sidebarbtnNav'}>Home</NavLink></button>
      <button className="sidebarbtn"><img src={explor} alt="btn explor" /><NavLink to={'/Explore'} className={'sidebarbtnNav'}>Explore</NavLink></button>
      <button className="sidebarbtn"><img src={notification} alt="btn notification" /><NavLink to={'/Notifications'} className={'sidebarbtnNav'}>Notifications</NavLink></button>
      <button className="sidebarbtn"><img src={messages} alt="btn messages" /><NavLink to={'/Messages'} className={'sidebarbtnNav'}>Messages</NavLink></button>
      <button className="sidebarbtn"><img src={bookMark} alt="btn bookmarks" /><NavLink to={'/Bookmarks'} className={'sidebarbtnNav'}>Bookmarks</NavLink></button>
      <button className="sidebarbtn"><img src={list} alt="btn twett list" /><NavLink to={'/Lists'} className={'sidebarbtnNav'}>Lists</NavLink></button>
      <button className="sidebarbtn"><img src={profilTweet} alt="btn profil tweet" /><NavLink to={'/Profil'} className={'sidebarbtnNav'}>Profil</NavLink></button>
      <button className="sidebarbtn"><img src={more} alt="btn more" /><NavLink to={'/More'} className={'sidebarbtnNav'}>More</NavLink></button>
      <button className="button">Tweet</button>
     </div>
    
<ProfilSetting imgProfilSidebaLeft={profilePhoto} nameTweet={'Bradley Ortiz'} tweetLien={'@bradley_'} certification={privateImg} />

    </section>
  );
}
export default SidebarLeft;
