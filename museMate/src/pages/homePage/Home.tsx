
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../../hooks/useMediaQuery'
import { SELECTEDPAGE } from '../../types/selectedPageEnums'
import { motion } from 'framer-motion'



const Home = () => {
        const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");

  return (
    <section
    id='home'
    className=' gap-16 bg-gray-200 md:h-full md:pb-0 py-10'
  >
    <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        
        <div className="z-10 mt-32 md:basis-3/5">
            <motion.div  className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                dd
                <div className='relative'>
                    
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-   ">
                <img alt="home-page-text" src='' />
                 </div>
                </div>
                <p className="mt-8 text-sm">
                    wgwwnwewewinewefwnefinwenweifwewenfwe wf efwefnweinfweinfwe fwefwnefnwef w efwejnweknfwe fwefnwe fwlefwef wefwnef 
                </p>
            </motion.div>
            <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <button className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-3 rounded '>
                          Join now
            </button>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            
             
            >
              <p>Learn More</p>
            </AnchorLink>
            </motion.div>
        </div>
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40  md:mt-16 md:justify-items-end'>
            3d image 
        </div>
    </div>

  </section>
  
  )
}

export default Home;