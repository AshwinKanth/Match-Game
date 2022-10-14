import './index.css'

const ImageItem = props => {
  const {imagesItem, changeCounter} = props
  const {id, thumbnailUrl} = imagesItem

  const changeCount = () => {
    changeCounter(id)
  }

  return (
    <div>
      <li>
        <button className="btn-thumb" type="button" onClick={changeCount}>
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </button>
      </li>
    </div>
  )
}

export default ImageItem
