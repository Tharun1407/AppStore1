import './index.css'
import {Component} from 'react'
import AppItem from '../AppItem'

class TabItem extends Component {
  state = {appsList1: [], isClicked: false}

  render() {
    const {appsList1, isClicked} = this.state
    const {tabsList, appsList} = this.props

    const handleCategory = e => {
      const result = appsList.filter(
        eachObj => e.target.value === eachObj.category,
      )
      this.setState({appsList1: result})
      this.setState({isClicked: !isClicked})
    }

    return (
      <div>
        <ul className="container">
          {tabsList.map(each => (
            <li key={each.tabId}>
              <button
                onClick={handleCategory}
                className="btn"
                type="button"
                key={each.tabId}
                value={each.tabId}
              >
                {each.displayText}
              </button>
            </li>
          ))}
        </ul>
        {isClicked ? (
          <AppItem appsList={appsList1} />
        ) : (
          <AppItem appsList={appsList} />
        )}
      </div>
    )
  }
}

export default TabItem
