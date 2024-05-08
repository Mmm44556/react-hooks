import {useState,useTransition} from 'react'
import User from './User'
import Posts from './Posts'
export default function Transition() {
  const [ConcurrentUser, setConcurrentUser] = useState(false)
  const [withoutConcurrentUser, setWithoutConcurrentUser] = useState(false)
  const [isPending, startTransition] = useTransition()


  const handler = () => {
    startTransition(() => {
      setConcurrentUser(true)
    })
  }

  return (
    <>
      <div >
        <h2>useTransition</h2>
        <div>
          <span>With Concurrent Mode :</span>
          <button
            onClick={handler}
            type="button">User</button>
          <button
            onClick={() => setConcurrentUser(false)}
            type="button">Posts</button>
        </div>
        {
          isPending ? <h1>pending...</h1> : ConcurrentUser ? <User /> : <Posts />
        }
      </div>
      <div >
        <div>
          <span>Without Concurrent Mode :</span>
          <button
            onClick={() => setWithoutConcurrentUser(true)}
            type="button">User</button>
          <button
            onClick={() => setWithoutConcurrentUser(false)}
            type="button">Posts</button>
        </div>
      </div>

      {
        withoutConcurrentUser ? <User /> : <Posts />
      }
    </>
  )
}
