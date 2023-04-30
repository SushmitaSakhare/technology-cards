// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="card-image">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
