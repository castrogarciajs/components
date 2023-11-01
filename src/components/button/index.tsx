import { Slot, component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <button class='qwikui-button'>
      <Slot />
    </button>
  )
})
