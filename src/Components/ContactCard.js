import React from 'react'

const ContactCard = ({ persons ,handleDelete ,handleApprove }) => {
  return (
    <div className='main' style={{marginTop:"20px"}}>
      {persons.map((value) => (
        <div className='ui card' key={value.id} style={{ marginBottom: '20px' }}>
          <div className='content'>
            <div className='header'>{value.name}</div>
            <div className='meta'>{value.email}</div>
            <div className='ui two buttons'>
              <button className='ui green basic button' onClick={()=>handleApprove(value.id)}>Approve</button>
              <button className='ui red basic button'
              onClick={()=>handleDelete(value.id)}
              >Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactCard
