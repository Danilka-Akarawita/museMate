
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SELECTEDPAGE } from "../../types/selectedPageEnums";

type Props = {
    name: string;
    description: string;
    image?: string;
  };

const StudioCards = ({name,description,image}: Props) => {
    
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
    
      </div>
      <div className=" ">
      <h4 className="font-bold">{name}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        // onClick={() => setSelectedPage(SELECTEDPAGE.CONTACTUS)}
        // href={`#${SELECTEDPAGE.CONTACTUS}`}
      >
        <p>Learn More</p>
      </AnchorLink>
      </div>
    </div>
  )
}

export default StudioCards;