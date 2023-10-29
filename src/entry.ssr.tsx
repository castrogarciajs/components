import {
  renderToStream,
  type RenderToStreamOptions,
} from '@builder.io/qwik/server'
import { manifest } from '@qwik-client-manifest'
import Root from './root'
import './theme/index.css'

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
  })
}
