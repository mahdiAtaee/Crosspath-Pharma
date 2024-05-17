import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SERVER from '../../assets/server.png'

function Deployment() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline()
      t1.current = gsap
        .timeline()
        .to('.container', { opacity: 1, duration: 0.53, delay: 39 })
        .to('.Deployment', { top: 120, duration: 0.53 })
        .to('.main', { opacity: 1, duration: 0.53 })
        .to('.other', { opacity: 0, duration: 0.33, delay: 1 })

      t2.to('.server-1', { scale: 1.5, x: '+50', y: '+50', duration: 0.33, delay: 42.5 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={roadmap} className="flex items-center justify-end">
      <div className="relative w-[150px] h-[70px] container opacity-0">
        <div className="relative w-full h-[70px] main opacity-0">
          <div className="w-full h-full mt-8 border-2 border-blue-400 center-box rounded-xl other" />
          <img src={SERVER} alt="server" className="server-1 absolute bottom-[95%] left-0 w-14" />
          <img
            src={SERVER}
            alt="server"
            className="server-2 absolute bottom-[95%] right-0 w-14 other"
          />
          <img
            src={SERVER}
            alt="server"
            className="server-3 absolute bottom-0 left-[50%] -translate-x-[50%] w-14 other"
          />
        </div>
        <p className="Deployment text-white font-bold text-sm md:text-lg font-poppins absolute top-[50%] text-center w-[150px]">
          Deployment
        </p>
      </div>
    </div>
  )
}

export default Deployment
