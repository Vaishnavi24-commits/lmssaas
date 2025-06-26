

import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <div>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id = "123"
        name = "bat" 
        topic="cat" 
        subject="science"
        duration={45}
        color="#ffff"
        />
        <CompanionCard 
        id = "126"
        name = "sat" 
        topic="gat" 
        subject="Maths"
        duration={40}
        color="#e5d0ff"
        />
        <CompanionCard 
        id = "129"
        name = "mat" 
        topic="hat" 
        subject="English"
        duration={49}
        color="#BDE7ff"
        />
      </section>
      <section className='home-section'>
         <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
        <CTA />
      </section>
    </div>
  )
}

export default Page