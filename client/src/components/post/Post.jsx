import './post.css'
import { Users } from '../../dummyData'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import TimeAgo from 'react-timeago'

const Post = ({ post }) => {
  const [postUser, setPostUser] = useState({})
  const [likes, setLikes] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)
  const user = useSelector((state) => state.authReducer.authData)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users/${post.userId}`)
      setPostUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className='post-profile-image' src={postUser.profilePicture ? PF + postUser.profilePicture : PF + 'default-profile.png'} alt="" />
            <span className="post-username">{postUser.username}</span>
            <span className="post-date"><TimeAgo date={post.createdAt} /></span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.content}</span>
          <img className='post-image' src={post.img ? PF + post.img : ''} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className='like-icon' src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className='like-icon' src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="post-like-counter">{post.likes}</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
