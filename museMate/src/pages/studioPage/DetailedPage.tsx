import React from 'react'
import { BenefitType, SELECTEDPAGE, StudioType } from '../../types/selectedPageEnums'
import { motion } from 'framer-motion'
import { HomeModernIcon,MusicalNoteIcon ,MicrophoneIcon } from '@heroicons/react/24/solid'
import Cards from '../benefitPage/Cards'
import SampleData from '../../Utils/studioInfo'
import { useParams } from 'react-router-dom'
import InstrumentCard from './InstrumentCard'





const DetailedPage = () => {
  const { id } = useParams<{ id: string }>();
  const selectedStudio = SampleData.find((studio: StudioType) => studio.id === id);
  return (
    <section
    id='detailedPage'
    className="mx-auto min-h-screen w-5/6 py-20">
        
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
                {selectedStudio?.name}
                </h1>
                
                <p className='my-5 text-sm'>
                  {selectedStudio?.chargePerHr}
                </p>

            </motion.div>
            

            <div className="grid grid-cols-1 gap-4 pl-5 pr-5 justify-center items-center mb-5 md:grid-col-3">
            {selectedStudio && (
        // Map over the instruments of the selected studio
        selectedStudio.instruments.map((instrument) => (
          <InstrumentCard
            id={selectedStudio.id}
            name={selectedStudio.name}
            description={selectedStudio.description}
            instruments={[instrument]}
            image={selectedStudio.image}
          />
        ))
      )}
       </div>
 

    </section>
  )
}
export default DetailedPage;