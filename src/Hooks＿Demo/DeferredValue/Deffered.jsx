import { useDeferredValue, useTransition ,useState } from 'react'
import List from './List';
export default function Deffered() {
  const [withConcurrentText, setWithConcurrentText] = useState('');
  const [withoutConcurrentText, setWithoutConcurrentText] = useState('');
  const deferredText = useDeferredValue(withConcurrentText);
  const [isPending, startTransition] = useTransition()

  const reset = () => {

    startTransition(() => {
      setWithConcurrentText('')
      setWithoutConcurrentText('')

    })
  }

  return (
    <>
      <h2>useDeferredValue</h2>
      <button onClick={reset}>Clear</button>
      {
        isPending ? <h3>Clearing...</h3> : <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
          <div>
            <span>With Concurrent Mode :</span><br />
            <Input value={withConcurrentText} onChange={(e) => setWithConcurrentText(e.target.value)} />
            <List text={deferredText} />
          </div>
          <div>
            <span>Without Concurrent Mode :</span><br />
            <Input value={withoutConcurrentText} onChange={(e) => setWithoutConcurrentText(e.target.value)} />
            <List text={withoutConcurrentText} />

          </div>
        </div>
      }

    </>
  )
}

function Input({ value, onChange }) {
  return (
    <input value={value} onChange={onChange} />
  )

}