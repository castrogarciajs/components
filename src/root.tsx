import { Button } from './components/button'
import { Counter } from './components/counter/counter'
import { Logo } from './components/logo/logo'

export default () => {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Qwik UI</title>
      </head>
      <body>
        <Logo />
        <Counter />
        <Button protoType='qw-button'>Click</Button>
      </body>
    </>
  )
}
