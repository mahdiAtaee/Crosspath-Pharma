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
        .to('.Data_Collection', { top: 120, duration: 0.53 })
        .to('.Main_database', { opacity: 1 })
        .to('.database-g-1', { opacity: 1 })
        .to('.database-g-2', { opacity: 1 })
        .to('.database-g-3', { opacity: 1 })
        .to('.database-g-1', { top: 80, left: 80, duration: 0.5, opacity: 0 })
        .to('.Main_database', {
          width: '+=10',
          height: '+=10',
          duration: 0.33,
          ease: 'power2.inOut',
        })
        .to('.database-g-2', { top: 80, left: 80, duration: 0.5, opacity: 0 })
        .to('.Main_database', {
          width: '+=10',
          height: '+=10',
          duration: 0.33,
          ease: 'power2.inOut',
        })
        .to('.database-g-3', { top: 80, left: 80, duration: 0.5, opacity: 0 })
        .to('.Main_database', {
          width: '-=10',
          height: '-=10',
          duration: 0.33,
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
        <p className="text-bold font-bold font-poppins text-xl md:text-3xl text-center text-white my-16">
          CrossPath
          <span className="text-blue-400"> Phrama </span>
          RoadMap
        </p>
      </div>
      <div className="relative w-[180px] h-[150px] flex items-center justify-center">
        <img src={DATABASE} alt="database" className="Main_database w-10 opacity-0" />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-1 absolute top-0 left-0 w-6 -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-2 absolute top-[50%] right-full w-6  -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-3 absolute top-full left-0 w-6 -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-3 absolute top-0 right-0 w-6 -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-2 absolute top-[50%] left-full w-6 -translate-y-[50%] opacity-0"
        />
        <img
          src={DATABASE}
          alt="database"
          className="database-g-1 absolute top-full right-0 w-6 -translate-y-[50%] opacity-0"
        />
        <p className="Data_Collection text-white font-bold text-sm md:text-lg font-poppins absolute top-[50%] text-center w-[100px]">
          Data Collection
        </p>
      </div>
    </div>
  )
}

export default DataCollection
