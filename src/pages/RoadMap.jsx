import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ARROW from '../assets/flash.png'
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
    gsap.registerPlugin(ScrollTrigger)
    const firstStation = Arrow2.current
    const SecondStation = Arrow4.current
    const thirdStation = Arrow6.current
    setTimeout(() => {
      firstStation.scrollIntoView({ behavior: 'smooth' })
    }, 17000)
    setTimeout(() => {
      SecondStation.scrollIntoView({ behavior: 'smooth' })
    }, 36000)
    setTimeout(() => {
      thirdStation.scrollIntoView({ behavior: 'smooth' })
    }, 47000)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-1', { opacity: 1, duration: 1, delay: 6 })
        .to('.arrow-1', { opacity: 0, duration: 1 })
    }, Arrow1)

    const ctx1 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-2', { opacity: 1, duration: 1, delay: 17 })
        .to('.arrow-2', { opacity: 0, duration: 1 })
    }, Arrow2)

    const ctx2 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-3', { opacity: 1, duration: 1, delay: 27 })
        .to('.arrow-3', { opacity: 0, duration: 1 })
    }, Arrow3)

    const ctx3 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-4', { opacity: 1, duration: 1, delay: 36 })
        .to('.arrow-4', { opacity: 0, duration: 1 })
    }, Arrow4)

    const ctx4 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-5', { opacity: 1, duration: 1, delay: 42 })
        .to('.arrow-5', { opacity: 0, duration: 1 })
    }, Arrow5)

    const ctx5 = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.arrow-6', { opacity: 1, duration: 1, delay: 47 })
        .to('.arrow-6', { opacity: 0, duration: 1 })
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
      <div ref={Arrow1} className="relative w-full min-h-[200px]">
        <img src={ARROW} alt="arrow" className="arrow-1 opacity-0 mx-auto w-[100px] h-[100px]" />
      </div>
      <DataIntegration />
      <div ref={Arrow2} className="relative w-full min-h-[200px]">
        <img
          src={ARROW}
          alt="arrow"
          className="arrow-2 opacity-0 mx-auto w-[100px] h-[100px] -scale-x-100"
        />
      </div>
      <DataValidation />
      <div ref={Arrow3} className="relative w-full min-h-[200px]">
        <img src={ARROW} alt="arrow" className="arrow-3 opacity-0 mx-auto w-[100px] h-[100px]" />
      </div>
      <FeatureExtraction />
      <div ref={Arrow4} className="relative w-full min-h-[200px]">
        <img
          src={ARROW}
          alt="arrow"
          className="arrow-4 opacity-0 mx-auto w-[100px] h-[100px] -scale-x-100"
        />
      </div>
      <Localizition />
      <div ref={Arrow5} className="relative w-full min-h-[200px]">
        <img src={ARROW} alt="arrow" className="arrow-5 opacity-0 mx-auto w-[100px] h-[100px]" />
      </div>
      <Deployment />
      <div ref={Arrow6} className="relative w-full min-h-[200px]">
        <img
          src={ARROW}
          alt="arrow"
          className="arrow-6 opacity-0 mx-auto w-[100px] h-[100px] -scale-x-100"
        />
      </div>
      <Maintenance />
    </div>
  )
}

export default RoadMap
