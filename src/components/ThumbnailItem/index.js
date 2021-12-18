import './index.css'

const ThumbnailItem = props => {
  const {eachItem, stateChange, ActiveThumbnile} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachItem
  const thumbnailClick = () => {
    stateChange(id)
  }
  return (
    <li>
      <button onClick={thumbnailClick} type="submit">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`imageStyle ${ActiveThumbnile}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
