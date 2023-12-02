// Studio.tsx
import { motion } from 'framer-motion';
import React from 'react';

import { StudioType } from '../../types/selectedPageEnums';
import StudioCards from './StudioCards';
import { useNavigate } from 'react-router-dom';
import SampleData from '../../Utils/studioInfo';



const Studio = () => {
  const navigate = useNavigate();

  const handleStudioCardClick = (id: string) => {
    // Programmatically navigate to the detailed page
    console.log("Clicked on studio card:", id);
    navigate(`/details/${id}`);
  };

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        className="md: my-5 md: w-4/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="basis basis-5/6 font-montserrat-text-3xl font-bold">Musemate Studios Hub</h1>
        <p className="my-5 text-sm">
          Immerse yourself in our diverse range of studios, meticulously curated for creativity. From pristine recording sanctuaries to vibrant band
          practice rooms, each space is designed to elevate your music, offering a unique and inspiring environment for every aspect of your musical
          journey.
        </p>
      </motion.div>
      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {SampleData.map((studio: StudioType) => (
          <StudioCards
            key={studio.id}
            id={studio.id}
            name={studio.name}
            description={studio.description}
            onClick={() => handleStudioCardClick(studio.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Studio;
