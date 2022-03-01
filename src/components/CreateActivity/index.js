import React from 'react'
import Form from '../Form/index'

function CreateActivity({user_id}) {
  return (
    <div>
      <Form user_id={user_id}/>
    </div>
  )
}

export default CreateActivity