import './index.css'

const TabItem = props => {
  const {tabsItem, isActive, updateActiveId} = props
  const {tabId, displayText} = tabsItem

  const activeIdClass = isActive ? 'active-id ' : ''

  const changeTab = () => {
    updateActiveId(tabId)
  }

  return (
    <div>
      <li className="list-item">
        <button
          type="button"
          className={`tab-name ${activeIdClass}`}
          onClick={changeTab}
        >
          {displayText}
        </button>
      </li>
    </div>
  )
}

export default TabItem
