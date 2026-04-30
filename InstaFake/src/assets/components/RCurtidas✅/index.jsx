import { useState } from 'react'
import Heart from '../../../../public/heart1.svg'
import HeartRed from '../../../../public/heartRed2.svg'

export default function LikeButton() {

  const [like, setLike] = useState(229)
  const [liked, setLiked] = useState(false)

  function admLike(){
    if(!liked){
      setLike(like + 1)
      setLiked(true)
    }else{
      setLike(like - 1)
      setLiked(false)
    }
  }

  return (
    <div>
      <div style={{marginTop: "20px"}}>
        {/* <p>{like}</p> */}
        <button onClick={admLike}> <img src={liked ? HeartRed : Heart} alt="icon" width={25}/> {like} </button>
      </div>
    </div>
  )
}