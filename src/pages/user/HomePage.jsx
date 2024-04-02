import React from 'react'
import MainHome from '../../components/user/mainHome/MainHome'
import Header from '../../components/user/header/Header'
import SecondHome from '../../components/user/secondHome/SecondHome'

function HomePage() {
  return (
    <>
      <Header></Header>
      <MainHome></MainHome>
      <SecondHome></SecondHome>
    </>
  )
}

export default HomePage
