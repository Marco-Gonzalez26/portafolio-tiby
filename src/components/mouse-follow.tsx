import { useEffect, useState } from 'react'

function MouseFollow() {
  const [pageX, setPageX] = useState(0)
  const [pageY, setPageY] = useState(0)

  useEffect(() => {
    const $mouse_follow = document.getElementById('mouse_follow')

    if ($mouse_follow) {
      window.addEventListener('mousemove', (evt) => {
        setPageX(evt.pageX)
        setPageY(evt.pageY)
      })
    }
  }, [])
  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
      style={{
        background: `radial-gradient(600px at ${pageX}px ${pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
      id='mouse_follow'></div>
  )
}

export default MouseFollow
