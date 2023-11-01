import { Slot, component$ } from '@builder.io/qwik'
import './button.css'

export default component$(() => {
  return (
    <button class='button'>
      <Slot />
    </button>
  )
})
