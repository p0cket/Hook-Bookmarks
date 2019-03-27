import React, {Fragment, useState} from 'react';
import ReactDom from 'react-dom';
import LinkCard from './components/LinkCard';

import './main.css'

const App = () => {
  const [cardData, setCardData] = useState([{ linkName: 'my  link', linkHref: 'https://github.com'}]);

  const [newCard, setNewCard] = useState({ linkName: '', linkHref: ''});

  const dispatchCardSet = (payload) => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({linkHref: '', linkName: ''});
  }

  const linkImageStyle = {
    backgroundImage: 'url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png\')'
  }

  return(
    <Fragment>
      <nav className="navigation">
        <img height="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
        <form onSubmit={e => e.preventDefault()}>
          <h2 className="formTitle">Add a bookmark</h2>
          <div>
            <label
              htmlFor="linkTitle" className="formLabel">Enter a bookmark name
            </label>
            <input
              value={newCard.linkName}
              onChange={e => setNewCard({...newCard, linkName: e.currentTarget.value})}
              type="text"
              name="linkTitle"
              minLength="1"
              maxLength="25"
              placeholder="25 characters max"
            />
          </div>
          <div>
            <label
              htmlFor="linkHref"
              className="formLabel">Enter a bookmark Link
            </label>
            <input
              value={newCard.linkHref}
              onChange={e => setNewCard({...newCard, linkHref: e.currentTarget.value})}
              htmlFor="text"
              name="linkHref"
              minLength="7"
              placeholder="https://example.com/"
            />
          </div>
          <button onClick={() => dispatchCardSet(newCard)}>Add</button>
        </form>
        </div>
        <div className="rightContent">
          <LinkCard cards={cardData} />
        </div>
      </main>
    </Fragment>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
