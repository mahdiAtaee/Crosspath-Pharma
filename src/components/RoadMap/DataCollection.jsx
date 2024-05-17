import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import DATABASE from '../../assets/database.png'

function DataCollection() {
  const roadmap = useRef(null)
  const t1 = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap
        .timeline()
        .to('.Data_Collection', { top: 150, duration: 0.8 })
        .to('.Main_database', { opacity: 1 })
        .to('.database-g-1', { opacity: 1 })
        .to('.database-g-2', { opacity: 1 })
        .to('.database-g-3', { opacity: 1 })
        .to('.database-g-1', { top: 100, left: 100, duration: 0.75, opacity: 0 })
        .to('.Main_database', {
          width: '+=10',
          height: '+=10',
          duration: 0.5,
          ease: 'power2.inOut',
        })
        .to('.database-g-2', { top: 100, left: 100, duration: 0.75, opacity: 0 })
        .to('.Main_database', {
          width: '+=10',
          height: '+=10',
          duration: 0.5,
          ease: 'power2.inOut',
        })
        .to('.database-g-3', { top: 100, left: 100, duration: 0.75, opacity: 0 })
        .to('.Main_database', {
          width: '-=10',
          height: '-=10',
          duration: 0.5,
          ease: 'power2.inOut',
        })
    }, roadmap)

    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <div ref={roadmap}>
      <div>
        <p className="text-bold font-bold font-poppins text-3xl text-center text-white my-16">
          CrossPath
          <span className="text-blue-400"> Phrama </span>
          RoadMap
        </p>
      </div>
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        <img src={DATABASE} alt="database" className="Main_database w-10 opacity-0" />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-1 absolute top-0 left-[25px] w-8 opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-2 absolute top-[50%] left-0 w-8  -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-3 absolute top-[100%] left-[25px] w-8 -translate-x-[50%] -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-3 absolute top-0 left-[90%] w-8 -translate-x-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-2 absolute top-[50%] left-full w-8 -translate-x-[50%] -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-1 absolute top-full left-[90%] w-8 -translate-x-[50%] -translate-y-[50%] opacity-0"
        />
        <p className="Data_Collection text-white font-bold text-xl font-poppins absolute top-[50%] text-center w-[100px]">
          Data Collection
        </p>
      </div>
    </div>
  )
}

export default DataCollection
