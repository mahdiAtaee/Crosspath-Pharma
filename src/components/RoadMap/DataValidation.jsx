import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import TICK from '../../assets/Tick.png'

function DataValidation() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    setTimeout(() => {
      roadmap.current.scrollIntoView({ behavior: 'smooth' })
    }, 24000)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline()
      t1.current = gsap
        .timeline()
        .to('.container', { opacity: 1, duration: 0.53, delay: 16 })
        .to('.Data_Validation', { top: 80, duration: 0.53 })
        .to('.other', { opacity: 1, duration: 0.53 })
        .to('.big-box', { x: '-65', duration: 0.5 })
        .to('.big-box', { backgroundColor: 'red', duration: 0.5 })
        .to('.big-box', { opacity: 0, duration: 0.5 })
        .to('.small-box', { x: '60', duration: 0.33 })
        .to('.small-box', { backgroundColor: '#60a5fa', duration: 0.33 })
        .to('.tick', { opacity: 1, duration: 0.33 })
        .to('.small-box', { backgroundColor: '#fff', duration: 0.33 })
        .to('.center-box', { borderColor: '#fff', duration: 0.33 })
        .to('.small-box', { scale: 1.5, duration: 0.33 })

      t2.to('.center-box', { borderColor: '#fff', duration: 0.33, delay: 20 })
        .to('.tick', { opacity: 0, duration: 0.33 })
        .to('.center-box', {
          scale: 1.5,
          duration: 0.33,
        })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={roadmap} className="flex items-center justify-start h-[150px]">
      <div className="relative w-[180px] h-[50px] flex items-center justify-center container opacity-0 flex-col gap-3">
        <img src={TICK} alt="tick" className="opacity-0 tick" />
        <div className="flex items-center justify-between ml-4 other opacity-0">
          <div className="small-box w-10 h-4 bg-white flex items-center justify-start pl-2">
            <span className="inline-block w-1 h-1 bg-black" />
          </div>
          <div className="w-12 h-6 border-2 border-blue-400 center-box mx-4 z-20" />
          <div className="big-box w-14 h-7 bg-white flex items-center justify-start pl-2 z-10">
            <span className="inline-block w-1 h-1 bg-black" />
          </div>
        </div>
        <p className="Data_Validation text-white font-bold text-sm md:text-lg font-poppins absolute top-[50%] text-center w-[100px]">
          Data Validation
        </p>
      </div>
    </div>
  )
}

export default DataValidation
