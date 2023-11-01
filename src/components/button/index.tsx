import { Slot, component$ } from '@builder.io/qwik'
import './styles.css'

type ButtonProps = {
  protoType: string
}
export const Button = component$<ButtonProps>(({ protoType }) => {
  return (
    <button class={`${protoType}`}>
      <Slot />
    </button>
  )
})
