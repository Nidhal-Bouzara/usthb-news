import { Dialog } from '@headlessui/react'
// import { Inertia } from '@inertiajs/inertia'
import React, { useRef, useState } from 'react'
// import FormControl from '../Formik/FormControl'
import FormSkeleton from '../Formik/FormSkeleton'
import * as yup from 'yup'

// styles
import './Nav.scss'

interface LoginCredentials {
  email: string
  password: string
}

const Nav = () => {
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [OpenModal, setOpenModal] = useState<boolean>(false)
  const [InitiateClose, setInitiateClose] = useState<boolean>(false)

  const handleClick = () => {
    setOpenModal((state) => !state)
  }

  const loginSchema = new yup.ObjectSchema({
    email: yup.string().email('Must be a valid email').required('This field is required'),
    password: yup.string().required('Must be a valid password'),
  })

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
          <div>
            <FormSkeleton<LoginCredentials>
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={(values) => {
                console.log(values)
              }}
              validationSchema={loginSchema}
            >
              {/* <FormControl control="email" name="email" label="Email" />
              <FormControl control="password" name="password" label="Password" />
              <button type="submit">Login</button> */}
            </FormSkeleton>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Nav
