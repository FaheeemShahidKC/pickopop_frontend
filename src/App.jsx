// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistartionFrom from './components/picker/registrationForm/RegistartionFrom'
import Login from './components/user/login/Login'
import SecondHome from './components/user/secondHome/SecondHome'
import Signup from './components/user/signup/Signup'
import Sample from './pages/Sample'
import HomePage from './pages/user/HomePage'
import UserRoute from './routes/UserRoute'
import PickerRoute from './routes/PickerRoute'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/*' element={<UserRoute></UserRoute>}></Route>
        <Route path='/picker*' element={<PickerRoute></PickerRoute>}></Route>
        {/* <Route path='/admin*' element={<UserRoute></UserRoute>}></Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
