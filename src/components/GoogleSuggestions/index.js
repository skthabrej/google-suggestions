import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput:''}

  onChangeSearchInput = event => {
    this.setState({searchInput:event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput:value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion => (
      eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLocaleLowerCase())),)

    return (
      <div className="google-search-suggestions-app-container">
        <div className="google-suggestions-container">
          <img
            src="https://i.postimg.cc/8zq0qJjr/google-ge091fa45a-1280.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://i.postimg.cc/Hk2qR0fv/seo-g0d75393d0-1280.png"
              />
              <input type="search" placeholder='search google' onChange={this.onChangeSearchInput} className="search-input" value={searchInput}/>
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionDetails={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                  key={eachSuggestion.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions