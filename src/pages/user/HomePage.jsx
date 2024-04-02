import React from 'react'
import MainHome from '../../components/user/mainHome/MainHome'
import Header from '../../components/user/header/Header'
import SecondHome from '../../components/user/secondHome/SecondHome'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Header></Header>
      <MainHome></MainHome>
      <SecondHome></SecondHome>
    </div>
  )
}

export default HomePage
