import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import User from './user'


export default function Main() {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    load()
  }, [])
  const load = () => {
    fetch('http://localhost:3000/user')
    .then((res) => res.json())
    .then((data) => {
      setUserList(data)
      console.log(data);
    })
  }

  const getmessage = (e) => {
    console.log(e);
  }
  return (
    <Container>
      <div className='main'>
        <div className='users'>
          {/* partie gauche */}
          {/* <div className='user'>Prenom Nom</div>
          <div className='user'>Prenom Nom</div>
          <div className='user'>Prenom Nom</div>
          <div className='user'>Prenom Nom</div> */}

          {
            userList.map(e => <User key={e._id} nom={e.nom} id={e._id} getmessage={() => getmessage(e._id)}/>)
          }
        </div>

        <div className='messages'>
          {/* partie droite */}
          <div>
            <p className='recu'>salut</p>
            <p className='envoye'>salut</p>
            <p className='recu'>salut</p>
            <p className='envoye'>salut</p>
          </div>
          <div className='newmessage'>
            <FloatingLabel>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px',  width: '600px' }}
              />
            </FloatingLabel>
            <Button 
              variant="secondary"
              style={{ width: '200px', height: '50px', margin: '20px' }}>Envoyer
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}