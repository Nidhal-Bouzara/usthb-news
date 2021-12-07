import { Dialog } from '@headlessui/react'
import React, { useRef, useState } from 'react'
import github from '../../../images/github.svg'
import phone from '../../../images/phone.svg'
import email from '../../../images/email.svg'
// import LoginForm from './components/LoginForm/LoginForm'

// styles
import './Nav.scss'

const Nav = () => {
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [OpenModal, setOpenModal] = useState<boolean>(false)
  const [InitiateClose, setInitiateClose] = useState<boolean>(false)

  const handleClick = () => {
    setOpenModal((state) => !state)
  }

  return (
    <div>
      <ul className="nav_list">
        <li className="nav_item">USTHB News</li>
        <li className="nav_item">
          <div className="nav_actions">
            <a className="nav_link" href="https://github.com/Nidhal-Bouzara">
              NidhalB
            </a>
            <button onClick={handleClick} className="nav_button">
              Reach Me!
            </button>
          </div>
        </li>
      </ul>
      <Dialog
        className="modal"
        open={OpenModal}
        ref={modalRef}
        onClickCapture={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (modalRef.current === event.target) {
            setInitiateClose(true)
            setTimeout(() => {
              setInitiateClose(false)
              setOpenModal(false)
            }, 150)
          }
        }}
        onClose={() => setOpenModal(true)}
      >
        <div className={`modal-container ${InitiateClose && 'playCloseAnimation'}`}>
          <Dialog.Title className="modal-title_cotnainer">
            <div>My Links:</div>
          </Dialog.Title>
          <ul className="contact_list">
            <li className="contact_list_item"><a href="https://github.com/nidhal-bouzara"><img src={github} alt="https://github.com/nidhal-bouzara" /></a></li>
            <li className="contact_list_item"><a href="tel:+213541645765"><img src={phone} alt="+213541645765" /></a></li>
            <li className="contact_list_item"><a href="mailto:nidhalanis.bouzara@gmail.com"><img src={email} alt="nidhalanis.bouzara@gmail.com" /></a></li>
          </ul>
          {/* <LoginForm /> */}
        </div>
      </Dialog>
    </div>
  )
}

export default Nav
