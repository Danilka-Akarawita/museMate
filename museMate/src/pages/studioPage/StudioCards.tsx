
import { NavLink } from 'react-router-dom';

type Props = {
    id: string;
    name: string;
    description: string;
    image?: string;
    onClick?: () => void; // onClick prop that takes no arguments and returns void
};

const StudioCards = ({ id, name, description, image, onClick }: Props) => {
    
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
    
      </div>
      <div className=" ">
      <h4 className="font-bold">{name}</h4>
      <p className="my-3">{description}</p>
      <NavLink to={`/details/${id}`} className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={onClick}>
        <p>Learn More</p>
      </NavLink>
      </div>
    </div>
  );
}

export default StudioCards;
