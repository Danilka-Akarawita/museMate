
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../../hooks/useMediaQuery'
import { SELECTEDPAGE } from '../../types/selectedPageEnums'

type Props = {
    setSelectedPage:(value:SELECTEDPAGE)=>void
}

const Home = ({setSelectedPage}: Props) => {
        const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");

  return (
    <section
    id='home'
    className=' gap-16 bg-gray-200 md:h-full md:pb-0 py-10'
  >
    <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        
        <div className="z-10 mt-32 md:basis-3/5">
            <div className='md:-mt-20'>
                dd
                <div className='relative'>
                    
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-   ">
                <img alt="home-page-text" src='' />
                 </div>
                </div>
                <p className="mt-8 text-sm">
                    wgwwnwewewinewefwnefinwenweifwewenfwe wf efwefnweinfweinfwe fwefwnefnwef w efwejnweknfwe fwefnwe fwlefwef wefwnef 
                </p>
            </div>
            <div className="mt-8 flex items-center gap-8">
            <button className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-3 rounded '>
                          Join now
            </button>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SELECTEDPAGE.CONTACTUS)}
              href={`#${SELECTEDPAGE.CONTACTUS}`}
            >
              <p>Learn More</p>
            </AnchorLink>
            </div>
        </div>
        <div>
            3d image 
        </div>
    </div>

  </section>
  
  )
}

export default Home;