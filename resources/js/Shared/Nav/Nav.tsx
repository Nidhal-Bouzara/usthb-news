import { Dialog } from '@headlessui/react'
import React, { useRef, useState } from 'react'

// styles
import './Nav.scss'
import LoginForm from './components/LoginForm/LoginForm'

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
              Log In
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
            <div>Sign In</div>
          </Dialog.Title>
          <LoginForm />
        </div>
      </Dialog>
    </div>
  )
}

export default Nav
