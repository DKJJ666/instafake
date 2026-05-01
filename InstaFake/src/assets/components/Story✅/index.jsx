import './style.css'

export default function Story(props) {
  return (
    <div className="story"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
    >
      <h2>{props.title}</h2>
    </div>
  )
}


 








