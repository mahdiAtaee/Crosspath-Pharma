import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import BLUEBOX from '../../assets/blueBox.png'
import WHITEBOX from '../../assets/whiteBox.png'

function DataIntegration() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.container', { opacity: 1, duration: 1, delay: 7.5 })
        .to('.Data_Collection', { top: 120, duration: 1 })
        .to('.box', { opacity: 1, duration: 0.75 })
        .to('.bluebox-2', { x: 72, duration: 0.75 })
        .to('.bluebox-3', { x: '-72', y: '+20', duration: 0.75 })
        .to('.bluebox-1', { x: '72', y: '+40', duration: 0.75 })
        .to('.center-box', { opacity: 1, duration: 0.75 })
        .to('.whitebox', { opacity: 0, duration: 0.5 })
        .to('.center-box', { borderColor: '#60a5fa', duration: 0.75 })
        .to('.bluebox', { opacity: 0, duration: 0.75 })
        .to('.whitebox-1', { x: '72', y: '+40', duration: 0.1 })
        .to('.whitebox-2', { x: '-72', y: '+40', duration: 0.1 })
        .to('.whitebox-3', { x: '-72', y: '-20', duration: 0.1 })
        .to('.whitebox', { opacity: 1, duration: 0.5 })
        .to('.center-box', { borderColor: '#fff', duration: 0.75 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={roadmap} className="flex items-center justify-end">
      <div className="relative w-[200px] h-[200px] flex items-start justify-center opacity-0 container">
        <div className="w-16 h-[4.3rem] mt-8 border-2 border-white center-box opacity-0" />
        <img
          src={BLUEBOX}
          alt="BLUEBOX"
          className="bluebox-1 bluebox box  absolute top-0 left-0 w-14 opacity-0"
        />
        <img
          src={WHITEBOX}
          alt="whitebox"
          className="whitebox whitebox-1 box absolute top-[20%] left-0 w-14 opacity-0"
        />
        <img
          src={BLUEBOX}
          alt="BLUEBOX"
          className="bluebox-2 box bluebox absolute top-[40%] left-0 w-14 opacity-0"
        />
        <img
          src={WHITEBOX}
          alt="WHITEBOX"
          className="whitebox whitebox-2 box  absolute top-0 right-0 w-14 opacity-0"
        />
        <img
          src={BLUEBOX}
          alt="BLUEBOX"
          className="bluebox-3 box bluebox absolute top-[20%] right-0 w-14 opacity-0"
        />
        <img
          src={WHITEBOX}
          alt="WHITEBOX"
          className="whitebox box whitebox-3 absolute top-[40%] right-0 w-14 opacity-0"
        />
        <p className="Data_Collection text-white font-bold text-xl font-poppins absolute top-[50%] text-center w-[200px]">
          Data Integration
        </p>
      </div>
    </div>
  )
}

export default DataIntegration
