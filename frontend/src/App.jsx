import { Route, Router } from 'react-router-dom'
import './App.css'
import Login from './components/Login'

function App() {
  

  return (
    <Router>
      <Route path="/" element={<Login />} />
    </Router>
  )
}

export default App
