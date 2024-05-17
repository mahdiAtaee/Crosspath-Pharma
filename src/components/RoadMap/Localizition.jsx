import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import GREENFLAG from '../../assets/greenFlag.png'
import BLUEFLAG from '../../assets/blueFlag.png'
import BOX from '../../assets/Vector 1.png'
import DATATABLE from '../../assets/datatable.png'

function Localization() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline()
      const t3 = gsap.timeline()

      t1.current = gsap
        .timeline()
        .to('.container', { opacity: 1, duration: 0.53, delay: 32 })
        .to('.Localization', { top: 160, duration: 0.53 })
        .to('.img', { opacity: 1, duration: 0.33 })
        .to('.blue-container', { position: 'relative', top: 45, left: 72, duration: 0.66 })
        .to('.other', { opacity: 0, duration: 0.66, delay: 0.5 })

      t2.to('.green-container', {
        position: 'relative',
        top: 45,
        left: -70,
        duration: 0.66,
        delay: 34,
      }).to('.green-container', { scale: 1.5, x: +30, y: 50, duration: 0.66, delay: 0.5 })

      t3.to('.green-flag', { filter: 'brightness(0) invert(1)', duration: 0.66, delay: 36 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={roadmap} className="flex items-center justify-start">
      <div className="relative w-[180px] h-[150px] flex items-center justify-center opacity-0 container flex-col gap-10">
        <div className="flex items-center justify-center gap-8 img opacity-0">
          <div className="w-10 h-10 relative blue-container other">
            <img src={BLUEFLAG} alt="BLUEFLAG" className="absolute bottom-[80%] right-0 w-3" />
            <img src={DATATABLE} alt="DATATABLE" className="absolute top-0 left-0 w-12" />
          </div>
          <div className="w-10 h-10 relative green-container">
            <img
              src={GREENFLAG}
              alt="GREENFLAG"
              className="green-flag absolute bottom-[85%] right-0 w-3"
            />
            <img src={DATATABLE} alt="DATATABLE" className="absolute top-0 left-0 w-12" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 other img opacity-0">
          <div className="w-12 h-12 relative">
            <img
              src={GREENFLAG}
              alt="GREENFLAG"
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%] w-4"
            />
            <img src={BOX} alt="BOX" className="absolute bottom-0 left-0 w-full" />
          </div>
          <div className="w-12 h-12 relative">
            <img
              src={BLUEFLAG}
              alt="BLUEFLAG"
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%] w-4"
            />
            <img src={BOX} alt="BOX" className="absolute bottom-0 left-0 w-full" />
          </div>
        </div>
        <p className="Localization text-white font-bold text-sm md:text-lg font-poppins absolute top-[50%] text-center w-[180px]">
          Localization & Standardization
        </p>
      </div>
    </div>
  )
}

export default Localization
