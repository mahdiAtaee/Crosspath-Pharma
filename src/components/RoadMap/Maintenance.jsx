import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SERVER from '../../assets/server.png'
import TOOL from '../../assets/maki_cross.png'
import MULTIPLY from '../../assets/multiply.png'

function Maintenance() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline()
      const t3 = gsap.timeline()
      const t4 = gsap.timeline()
      t1.current = gsap
        .timeline()
        .to('.container', { opacity: 1, duration: 0.8, delay: 48 })
        .to('.Maintenance', { top: 120, duration: 0.8 })
        .to('.main', { opacity: 1, duration: 0.8 })
        .to('.tool', { top: 150, duration: 0.8 })
        .to('.tool', { opacity: 1, duration: 0.8 })
        .to('.tool', { opacity: 0, duration: 0.8 })

      t2.to('.tool-2', { opacity: 1, duration: 0.5, delay: 52 })
        .to('.tool-2', {
          left: -20,
          duration: 0.5,
        })
        .to('.center-box', { borderColor: 'transparent', duration: 0.5 })

      t3.to('.multiply', { opacity: 0, duration: 0.8, delay: 52 })
        .to('.multiply-2', { opacity: 0, duration: 0.5 })
        .to('.tool-2', { left: 50, scale: 2, duration: 0.5 })

      t4.to('.other', { opacity: 0, duration: 0.5, delay: 53 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={roadmap} className="flex items-center justify-start">
      <div className="relative w-[150px] h-[70px] container opacity-0">
        <div className="relative w-full h-[70px] main opacity-0">
          <div className="w-full h-full mt-8 border-2 border-blue-400 center-box rounded-xl relative">
            <img
              src={MULTIPLY}
              alt="MULTIPLY"
              className="multiply-2 absolute top-[50%] right-[90%] text-2xl text-red-600 text-bold -translate-y-[50%] other"
            />
            <img
              src={MULTIPLY}
              alt="MULTIPLY"
              className="multiply absolute top-[50%] left-[90%] text-2xl text-red-600 text-bold -translate-y-[50%] other"
            />
            <img
              src={TOOL}
              alt="TOOL"
              className="tool-2 absolute top-[50%] left-[90%] -translate-y-[50%] w-8 opacity-0"
            />
          </div>
          <img
            src={SERVER}
            alt="server"
            className="server-1 absolute bottom-[95%] left-0 w-14 other"
          />
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
        <p className="Maintenance text-white font-bold text-xl font-poppins absolute top-[50%] text-center w-[150px]">
          Maintenance
        </p>
        <img
          src={TOOL}
          alt="TOOL"
          className="tool absolute bottom-0 left-[50%] top-full -translate-x-[50%] w-8 other opacity-0"
        />
      </div>
    </div>
  )
}

export default Maintenance
