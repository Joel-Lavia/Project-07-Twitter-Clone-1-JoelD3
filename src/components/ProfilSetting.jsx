import Avatar from "./Avatar"
function ProfilSetting({imgProfilSidebaLeft,nameTweet,tweetLien,certification}) {
return(
<div className="profilSibare">
 <Avatar avatarImg={imgProfilSidebaLeft}/>
 <p className="tweet-name"> <span>{nameTweet}<i><img src={certification} alt="" /></i></span> <span className="tweet-title-details">{tweetLien}</span>
  </p> 
 </div>
)
}
export default ProfilSetting