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
        .to('.container', { opacity: 1, duration: 0.53, delay: 24 })
        .to('.Feature_Extraction', { top: 120, duration: 0.53 })
        .to('.box', { opacity: 1, duration: 0.53 })
        .to('.bottle', { x: 80, duration: 0.66 })
        .to('.magnify', { x: 40, duration: 0.33 })
        .to('.magnify', { rotate: '-50', duration: 0.33 })
        .to('.magnify', { y: '-50', duration: 0.33 })
        .to('.magnify', { y: '-40', duration: 0.53 })
        .to('.magnify', { rotate: '0', y: 0, x: 20, duration: 0.33, delay: 0.33 })
        .to('.redMark', { y: '-40', x: '-70', duration: 0.33 })
        .to('.bottle', { x: 135, duration: 0.33, delay: 0.33 })
        .to('.bottle', { x: 200, duration: 0.33 })
        .to('.mainBottle', { y: 20, duration: 0.33 })
        .to('.mainBottle', { opacity: 1, duration: 0.33 })

      t2.to('.redMark', { x: '-10', duration: 0.33, delay: 29.1 })
        .to('.redMark', {
          x: '35',
          duration: 0.33,
        })
        .to('.box', { opacity: 0, duration: 0.33 })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={roadmap}>
      <div className="flex items-end justify-start flex-col relative min-h-[150px] container opacity-0">
        <img
          src={BOTTLE}
          alt="bottle"
          className="w-20 brightness-0 invert opacity-0 mainBottle mr-14 absolute top-0 right-0"
        />
        <div className="flex items-center justify-between opacity-0 gap-2 w-[200px] box relative before:absolute before:w-7 before:h-20 before:right-full before:top-0 before:bg-white after:absolute after:w-7 after:h-20 after:left-full after:top-0 after:bg-white">
          <img src={BOTTLE} alt="bottle" className="absolute top-0 w-8 left-0 bottle" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <span className="w-[20%] border border-white mt-8 dash" />
          <img src={MAGNIFY} alt="magnify" className="absolute top-5 w-24 left-0 magnify" />
          <img src={YELLOWMARK} alt="mark" className="absolute top-[120%] w-4 right-0" />
          <img src={BLUEMARK} alt="mark" className="absolute top-[120%] w-4 right-1" />
          <img src={REDMARK} alt="mark" className="absolute top-[120%] w-4 right-3 redMark" />
        </div>
        <p className="Feature_Extraction text-white font-bold text-sm md:text-lg font-poppins absolute top-0 text-center w-[100px] mr-12">
          Feature Extraction
        </p>
      </div>
    </div>
  )
}

export default FeatureExtraction
