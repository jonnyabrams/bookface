import './rightbar.css'
import { Users } from "../../dummyData"
import Online from '../online/Online'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import EditProfileModal from '../editProfileModal/EditProfileModal'

const Rightbar = ({ profileUser }) => {
  const user  = useSelector((state) => state.authReducer.authData)
  const [modalOpened, setModalOpened] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthday-container">
          <img className="birthday-image" src={PF + 'gift.png'} alt="" />
          <span className="birthday-text">
            <b>Rey McSriff</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbar-ad" src={PF + 'ad.jpeg'} alt="" />
        <h4 className="rightbar-title">Online friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    
    return(
      <>
        <h4 className='rightbar-title'>User information</h4>
        {user._id === profileUser._id && <button className="edit-profile-button" onClick={() => setModalOpened(true)}>Edit profile</button>}
        <EditProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{profileUser.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{profileUser.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">{profileUser.relationship}</span>
          </div>
        </div>
        <h4 className='rightbar-title'>User friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img src={`${PF}default-profile.png`} alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">Rey McSriff</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PF}default-profile.png`} alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">Rey McSriff</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PF}default-profile.png`} alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">Rey McSriff</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        { profileUser ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}

export default Rightbar 
