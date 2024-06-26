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
import AdminRoute from './routes/AdminRoute'
import { Toaster } from 'sonner'
import YourComponent from './components/user/YourComponent'

function App() {
  return (
    <>
      <Toaster richColors position='bottom-right'></Toaster>
      <Router>
        <Routes>
          <Route path='/*' element={<UserRoute></UserRoute>}></Route>
          <Route path='/picker*' element={<PickerRoute></PickerRoute>}></Route>
          <Route path='/admin*' element={<AdminRoute></AdminRoute>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
