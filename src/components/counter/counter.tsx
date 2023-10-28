import { component$, useSignal } from '@builder.io/qwik'
import './counter.css'

export const Counter = component$(() => {
  const count = useSignal(0)

  return (
    <div>
      <p>Count: {count.value}</p>
      <p>
        <button onClick$={() => count.value++} class='button'>
          Increment
        </button>
      </p>
    </div>
  )
})
