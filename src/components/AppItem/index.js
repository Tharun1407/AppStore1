import './index.css'

const AppItem = props => {
  const {appsList} = props
  console.log(appsList)

  return (
    <ul className="main-div">
      {appsList.map(each => (
        <li key={each.appId}>
          <div className="card" key={each.appId}>
            <li>
              <img src={each.imageUrl} alt={each.appName} />
            </li>
            <li>
              <p className="para">{each.appName}</p>
            </li>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default AppItem
