import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Godrej semi automatic washing machine'},
  {id: 2, suggestion: 'Nike jacket for men'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of gold today'},
  {id: 5, suggestion: 'Armani Exchange Clothes for men'},
  {id: 6, suggestion: 'Lion Dates honey 1kg packet'},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList}/>

export default App