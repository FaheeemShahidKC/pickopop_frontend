import React from 'react'
import PickerProfile from '../../components/picker/PickerProfile'
import PickerHeader from '../../components/picker/PickerHeader'
import { useParams } from 'react-router-dom'

function Profile() {
     return (

          <div>
               <PickerHeader ></PickerHeader>
               <PickerProfile ></PickerProfile>
          </div>
     )
}

export default Profile
