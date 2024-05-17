import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ARROW from '../assets/arrow (2).png'
import {
  DataCollection,
  DataIntegration,
  DataValidation,
  Deployment,
  FeatureExtraction,
  Localizition,
  Maintenance,
} from '../components/RoadMap'

function RoadMap() {
  const divRef = useRef()

  useEffect(() => divRef.current.scrollIntoView({ behavior: 'smooth' }))

  const Arrow1 = useRef(null)
  const Arrow2 = useRef(null)
  const Arrow3 = useRef(null)
  const Arrow4 = useRef(null)
  const Arrow5 = useRef(null)
  const Arrow6 = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-1', { opacity: 1, duration: 0.66, delay: 6.5 })
        .to('.arrow-1', { opacity: 0, duration: 0.66 })
    }, Arrow1)

    const ctx1 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-2', { opacity: 1, duration: 0.66, delay: 14.5 })
        .to('.arrow-2', { opacity: 0, duration: 0.66 })
    }, Arrow2)

    const ctx2 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-3', { opacity: 1, duration: 0.66, delay: 22 })
        .to('.arrow-3', { opacity: 0, duration: 0.66 })
    }, Arrow3)

    const ctx3 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-4', { opacity: 1, duration: 0.66, delay: 30.5 })
        .to('.arrow-4', { opacity: 0, duration: 0.66 })
    }, Arrow4)

    const ctx4 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-5', { opacity: 1, duration: 0.66, delay: 37 })
        .to('.arrow-5', { opacity: 0, duration: 0.66 })
    }, Arrow5)

    const ctx5 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-6', { opacity: 1, duration: 0.66, delay: 43.5 })
        .to('.arrow-6', { opacity: 0, duration: 0.66 })
    }, Arrow6)

    return () => {
      ctx.revert()
      ctx1.revert()
      ctx2.revert()
      ctx3.revert()
      ctx4.revert()
      ctx5.revert()
    }
  }, [])
  return (
    <div className="w-[90%] md:w-[40vw] mx-auto" ref={divRef}>
      <DataCollection />
      <div ref={Arrow1} className="relative w-full min-h-[120px]">
        <img src={ARROW} alt="arrow" className="arrow-1 opacity-0 mx-auto w-[100px] h-[100px] brightness-100 invert-0" />
      </div>
      <DataIntegration />
      <div ref={Arrow2} className="relative w-full min-h-[120px]">
        <img
          src={ARROW}
          alt="arrow"
          className="arrow-2 opacity-0 mx-auto w-[100px] h-[100px] -scale-x-100 brightness-100 invert-0"
        />
      </div>
      <DataValidation />
      <div ref={Arrow3} className="relative w-full min-h-[120px]">
        <img src={ARROW} alt="arrow" className="arrow-3 opacity-0 mx-auto w-[100px] h-[100px] brightness-100 invert-0" />
      </div>
      <FeatureExtraction />
      <div ref={Arrow4} className="relative w-full min-h-[120px]">
        <img
          src={ARROW}
          alt="arrow"
          className="arrow-4 opacity-0 mx-auto w-[100px] h-[100px] -scale-x-100 brightness-100 invert-0"
        />
      </div>
      <Localizition />
      <div ref={Arrow5} className="relative w-full min-h-[120px] mt-14">
        <img src={ARROW} alt="arrow" className="arrow-5 opacity-0 mx-auto w-[100px] h-[100px] brightness-100 invert-0" />
      </div>
      <Deployment />
      <div ref={Arrow6} className="relative w-full min-h-[120px] mt-24">
        <img
          src={ARROW}
          alt="arrow"
          className="arrow-6 opacity-0 mx-auto w-[100px] h-[100px] -scale-x-100 brightness-100 invert-0"
        />
      </div>
      <Maintenance />
    </div>
  )
}

export default RoadMap
