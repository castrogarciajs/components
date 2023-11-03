import { SvelteHTMLElements, HTMLButtonAttributes } from 'svelte/elements'

export interface Props extends HTMLButtonAttributes {
  spinner?: SvelteHTMLElements
  isLoading?: boolean
}
