'use client'

import {React, useEffect} from 'react'
import DRItem from './pageContent/DRItem'
import ResultContent from './mainContent/ResultContent'
import NRRMainItem from './NRRMainItem'

export default function NRResults() {

    const user = [
        {
        'id':10,
        'isUser':true,
        'isVerified': false,
        'firstName':'Moustapha',
        'lastName':'Lo',
        'requestDate': '22/04/2024',
        'cniID': '2123456789P4Y3',
        'cniExpirationDate': '22/04/2024',
        'idPhoto':'/idPhoto.png',
        'userPhoto':'/propic.jpeg',
        'status':'Pending'
      },
        {
        'id':10,
        'isUser':true,
        'isVerified': false,
        'firstName':'Seck',
        'lastName':'Mbaye Matar',
        'requestDate': '22/04/2024',
        'cniID': '2123456789P4Y3',
        'cniExpirationDate': '22/04/2024',
        'idPhoto':'/idPhoto.png',
        'userPhoto':'/propic.jpeg',
        'status':'Validated'
      },
        {
        'id':10,
        'isUser':true,
        'isVerified': false,
        'firstName':'Moussa',
        'lastName':'Diakhate',
        'requestDate': '22/04/2024',
        'cniID': '2123456789P4Y3',
        'cniExpirationDate': '22/04/2024',
        'idPhoto':'/idPhoto.png',
        'userPhoto':'/propic.jpeg',
        'status':'Validated'
      },
        {
        'id':10,
        'isUser':true,
        'isVerified': false,
        'firstName':'Moustapha',
        'lastName':'Lo',
        'requestDate': '22/04/2024',
        'cniID': '2123456789P4Y3',
        'cniExpirationDate': '22/04/2024',
        'idPhoto':'/idPhoto.png',
        'userPhoto':'/propic.jpeg',
        'status':'Rejected'
      },
        {
        'id':10,
        'isUser':true,
        'isVerified': false,
        'firstName':'Moustapha',
        'lastName':'Lo',
        'requestDate': '22/04/2024',
        'cniID': '2123456789P4Y3',
        'cniExpirationDate': '22/04/2024',
        'idPhoto':'/idPhoto.png',
        'userPhoto':'/propic.jpeg',
        'status':'Pending'
      },
        {
        'id':10,
        'isUser':true,
        'isVerified': false,
        'firstName':'Moustapha',
        'lastName':'Lo',
        'requestDate': '22/04/2024',
        'cniID': '2123456789P4Y3',
        'cniExpirationDate': '22/04/2024',
        'idPhoto':'/idPhoto.png',
        'userPhoto':'/propic.jpeg',
        'status':'Validated'
      },
    ]
      const results=user

  return (
    <div>
       <DRItem title='New Requests' subTitle='Requests > '
    subRek='New' />


     <ResultContent content={
        <NRRMainItem results={results}/>
     }></ResultContent>
    </div>
  )
}
