import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import BOTTLE from '../../assets/healthicons_medicine-bottle.png'
import MAGNIFY from '../../assets/magnify.png'
import REDMARK from '../../assets/redMark.png'
import BLUEMARK from '../../assets/blueMark.png'
import YELLOWMARK from '../../assets/yellowMark.png'

function FeatureExtraction() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline()
      t1.current = gsap
        .timeline()
        .to('.container', { opacity: 1, duration: 0.8, delay: 28 })
        .to('.Feature_Extraction', { top: 120, duration: 0.8 })
        .to('.bottle', { x: 100, duration: 1 })
        .to('.magnify', { x: 40, duration: 0.5 })
        .to('.magnify', { rotate: '-50', duration: 0.5 })
        .to('.magnify', { y: '-40', duration: 0.5 })
        .to('.magnify', { rotate: '0', y: 0, x: 20, duration: 0.5, delay: 1 })
        .to('.redMark', { y: '-40', x: '-50', duration: 0.5 })
        .to('.bottle', { x: 135, duration: 0.5 })
        .to('.bottle', { x: 200, duration: 0.5 })
        .to('.dash:before', { opacity: 0, duration: 0.5 })
        .to('.mainBottle', { y: 20, duration: 0.5 })
        .to('.mainBottle', { opacity: 1, duration: 0.5 })

      t2.to('.redMark', { x: '-10', duration: 0.5, delay: 34 })
        .to('.redMark', {
          x: '35',
          duration: 0.5,
        })
        .to('.box', { opacity: 0, duration: 0.5 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <div ref={roadmap}>
      <div className="flex items-end justify-start flex-col relative min-h-[200px] container opacity-0">
        <img
          src={BOTTLE}
          alt="bottle"
          className="w-24 brightness-0 invert opacity-0 mainBottle mr-12 absolute top-0 right-0"
        />
        <div className="flex items-center justify-between gap-2 w-[200px] box relative before:absolute before:w-10 before:h-24 before:right-full before:top-0 before:bg-white after:absolute after:w-10 after:h-24 after:left-full after:top-0 after:bg-white">
          <img src={BOTTLE} alt="bottle" className="absolute top-0 w-8 left-0 bottle" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <img src={MAGNIFY} alt="magnify" className="absolute top-0 w-32 left-0 magnify" />
          <img src={YELLOWMARK} alt="mark" className="absolute top-[120%] w-5 right-0" />
          <img src={BLUEMARK} alt="mark" className="absolute top-[120%] w-5 right-1" />
          <img src={REDMARK} alt="mark" className="absolute top-[120%] w-5 right-3 redMark" />
        </div>
        <p className="Feature_Extraction text-white font-bold text-xl font-poppins absolute top-[50%] text-center w-[100px] mr-12">
          Feature Extraction
        </p>
      </div>
    </div>
  )
}

export default FeatureExtraction
