import './index.css'

const TabsImageList = props => {
  const {imagesDetails, getRandomImage, selectImagesId} = props
  const {category, thumbnailUrl} = imagesDetails

  const onChangeImage = () => {
    getRandomImage()
    selectImagesId(category)
  }

  return (
    <li>
      <button type="button" onClick={onChangeImage} className="images">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default TabsImageList
