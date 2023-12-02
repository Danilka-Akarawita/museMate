import { NavLink } from "react-router-dom";
import { InstrumentType } from "../../types/selectedPageEnums";

type Props = {
  id: string;
  name: string;
  description: string;
  instruments: InstrumentType[];
  image: string;
};

const InstrumentCard: React.FC<Props> = ({ id, name, description, instruments, image }: Props) => {
  console.log("instruments: ", instruments);
  

  return (
    

    <div className="mt-5  rounded-md border-2 border-gray-100 px-12 py-10 text-center">
     {instruments.map((instrument) => (
        <>
        <div  className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {image}
        </div>
      </div>

      <h4 className="font-bold ">{instrument.itemName}</h4>
      <p className="my-3">{instrument.itemModel}</p>
      <p className="my-3">{instrument.itemCount}</p>
      
      </>
     ))}
        
    
        
      </div>
    
    
    
  );
};

export default InstrumentCard;
