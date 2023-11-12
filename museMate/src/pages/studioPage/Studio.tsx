import { motion } from 'framer-motion';
import React from 'react'
import { SELECTEDPAGE, StudioType } from '../../types/selectedPageEnums';
import StudioCards from './StudioCards';

type Props = {
    setSelectedPage:(value:SELECTEDPAGE)=>void
}
const studios: Array<StudioType> = [
    {
      name: "RecordEase ",
      description:
        "Your sonic haven for pristine recordings. Unparalleled clarity, advanced acoustics, and cutting-edge equipment create a masterpiece recording environment."
      //image: image1,
    },
    {
      name: "JamJive Lounge",
      description:"Versatile studio designed for lively band practices, where musicians jam, jive, and celebrate their shared musical language."
    //   image: image2,
    },
    {
      name: "RhythmRoost ",
      description:
        " Dynamic space for vibrant band practices, fostering collaboration and creativity for bands to refine their sound.",
    //   image: image3,
    }
]

const Studio = ({setSelectedPage}: Props) => {
  return (
    <section
    id='benefits'
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
         onViewportEnter={()=>setSelectedPage(SELECTEDPAGE.BENEFITS)}
        >
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
                Musemate Studios Hub
                </h1>
                <p className='my-5 text-sm'>
                Immerse yourself in our diverse range of studios, meticulously curated for creativity. From pristine recording sanctuaries to vibrant band practice rooms, each space is designed to elevate your music, offering a unique and inspiring environment for every aspect of your musical journey.
                </p>

            </motion.div>
            <div className='mt-5 items-center justify-between gap-8 md:flex'>
                {studios.map((studio:StudioType)=>
                (
                    <StudioCards 
                     //key={benefit.title}
                    name={studio.name}
                    description={studio.description}
                    image={studio.image}/>
                ))}
                </div>

        </motion.div>

    </section>
  )
}

export default Studio;