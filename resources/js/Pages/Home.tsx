import { Link } from '@inertiajs/inertia-react'
import React, { useState } from 'react'

const Home = () => {
  const [Count, setCount] = useState<number>(0)
  const handleCountChange = (action: '+' | '-', payload: number = 1) => {
    setCount((oldCount) => (action === '+' ? oldCount + payload : oldCount - payload))
  }
  return (
    <div>
      <h1>Hello</h1>
      <span>Count is: {Count}</span>
      <br />
      <button
        onClick={() => {
          handleCountChange('+')
        }}
      >
        &emsp;Increment&emsp;
      </button>
      <button
        onClick={() => {
          handleCountChange('-')
        }}
      >
        &emsp;Decrement&emsp;
      </button>
      <Link href="news">Go to News</Link>
    </div>
  )
}

export default Home
