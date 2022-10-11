import './index.css'

const Categories = props => {
  const {tabDetails, setActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onTabImages = () => {
    setActiveTabId(tabId)
  }
  return (
    <li>
      <button type="button" onClick={onTabImages} className="categories">
        {displayText}
      </button>
    </li>
  )
}
export default Categories
