export const profileImage = new URL('./../assets/profile.jpg', import.meta.url).href

export default function HeroProfileImage() {
    return(
         <div className="profile-wrap">
          <div className="profile-ring">
            <img src={profileImage} alt="Trader Aadi profile" />
          </div>
        </div>
    )
}