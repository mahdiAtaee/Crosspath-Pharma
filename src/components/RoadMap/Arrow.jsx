import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ARROW from '../../assets/flash.png'

function Arrow({ dir, index }) {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to(`.arrow-${index}`, { opacity: 1, duration: 0.66, delay: 5.5 })
        .to(`.arrow-${index}`, { opacity: 0, duration: 0.66 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <div ref={roadmap} className="relative w-full">
      <img
        src={ARROW}
        alt="waveform path"
        className={`arrow-${index} opacity-0 mx-auto w-[100px] h-[100px] ${
          dir === 'left' ? '-scale-x-100' : null
        }`}
      />
    </div>
  )
}

export default Arrow
