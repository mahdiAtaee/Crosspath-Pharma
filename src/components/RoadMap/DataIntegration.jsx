import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import BLUEBOX from '../../assets/blueBox.png'
import WHITEBOX from '../../assets/whiteBox.png'

function DataIntegration() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    setTimeout(() => {
      roadmap.current.scrollIntoView({ behavior: 'smooth' })
    }, 15000)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.container', { opacity: 1, duration: 0.66, delay: 8 })
        .to('.Data_Integration', { top: 100, duration: 0.66 })
        .to('.box', { opacity: 1, duration: 0.5 })
        .to('.bluebox-2', { x: 70, duration: 0.5 })
        .to('.bluebox-3', { x: '-70', y: '+16', duration: 0.5 })
        .to('.bluebox-1', { x: '70', y: '+30', duration: 0.5 })
        .to('.center-box', { opacity: 1, duration: 0.5 })
        .to('.whitebox', { opacity: 0, duration: 0.33 })
        .to('.center-box', { borderColor: '#60a5fa', duration: 0.5 })
        .to('.bluebox', { opacity: 0, duration: 0.5 })
        .to('.whitebox-1', { x: '70', y: '+30', duration: 0.1 })
        .to('.whitebox-2', { x: '-70', y: '+30', duration: 0.1 })
        .to('.whitebox-3', { x: '-70', y: '-15', duration: 0.1 })
        .to('.whitebox', { opacity: 1, duration: 0.33 })
        .to('.center-box', { borderColor: '#fff', duration: 0.5 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={roadmap} className="flex items-center justify-end">
      <div className="relative w-[180px] h-[150px] flex items-start justify-center opacity-0 container">
        <div className="w-[50px] h-[52px] mt-6 border-2 border-white center-box opacity-0" />
        <img
          src={BLUEBOX}
          alt="BLUEBOX"
          className="bluebox-1 bluebox box  absolute top-0 left-0 w-10 opacity-0"
        />
        <img
          src={WHITEBOX}
          alt="whitebox"
          className="whitebox whitebox-1 box absolute top-[20%] left-0 w-10 opacity-0"
        />
        <img
          src={BLUEBOX}
          alt="BLUEBOX"
          className="bluebox-2 box bluebox absolute top-[40%] left-0 w-10 opacity-0"
        />
        <img
          src={WHITEBOX}
          alt="WHITEBOX"
          className="whitebox whitebox-2 box  absolute top-0 right-0 w-10 opacity-0"
        />
        <img
          src={BLUEBOX}
          alt="BLUEBOX"
          className="bluebox-3 box bluebox absolute top-[20%] right-0 w-10 opacity-0"
        />
        <img
          src={WHITEBOX}
          alt="WHITEBOX"
          className="whitebox box whitebox-3 absolute top-[40%] right-0 w-10 opacity-0"
        />
        <p className="Data_Integration text-white font-bold text-sm md:text-lg font-poppins absolute top-[50%] text-center w-[150px]">
          Data Integration
        </p>
      </div>
    </div>
  )
}

export default DataIntegration
