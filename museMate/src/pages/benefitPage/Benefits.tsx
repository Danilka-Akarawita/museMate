import React from 'react'
import { BenefitType, SELECTEDPAGE } from '../../types/selectedPageEnums'
import { motion } from 'framer-motion'
import { HomeModernIcon,MusicalNoteIcon ,MicrophoneIcon } from '@heroicons/react/24/solid'
import Cards from './Cards'

type Props = {
    setSelectedPage:(value:SELECTEDPAGE)=>void
}
const benefits: Array<BenefitType> = [
    {
      icon: <MusicalNoteIcon className="h-6 w-6" />,
      title: "Band Practices",
      description:
        "Elevate sound with top-notch rehearsal spaces. Perfect your music in an environment fostering creativity and camaraderie",
    },
    {
      icon: <MicrophoneIcon  className="h-6 w-6" />,
      title: "Recording Sessions",
      description:
        "Capture perfection in our recording studios. State-of-the-art facilities and expert engineers ensure your music reaches its full potential effortlessly",
    },
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "Exclusive Cover Song Studio Awaits",
      description:
        "Discover a creative haven for cover sessions. Rent our inspiring space and turn your musical vision into captivating cover masterpieces",
    },
  ];

const Benefits = () => {
  return (
    <section
    id='benefits'
    className="mx-auto min-h-full w-5/6 py-20">
        
            <motion.div 
            className='md: my-5 md: w-4/5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
              >
                <h1 className='basis basis-5/6 font-montserrat-text-3xl font-bold'>
                The Studio Benefits You've Been Eagerly Awaiting
                </h1>
                <p className='my-5 text-sm'>
                    Discover a world of musical possibilities at our studio. With top-notch recording equipment and acoustically tuned spaces, we offer an unparalleled experience for recording, band practices, and rentals. Tailor your journey with flexible options and celebrate the joy of making music. Your artistic adventure begins here, where every note finds its unique voice.
                </p>

            </motion.div>
            <div className='mt-5 items-center justify-between gap-8 md:flex'>
                {benefits.map((benefit:BenefitType)=>
                (
                    <Cards 
                     key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}/>
                    
                ))}
                </div>

 

    </section>
  )
}
export default Benefits;