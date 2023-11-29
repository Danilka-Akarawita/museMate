import React from 'react'
import { InstrumentType } from '../../types/selectedPageEnums';

type Props = {
    id:string,
    name: string;
    description: string;
    chargePerHr?: string; 
    image?:string,
    instruments?: InstrumentType[];
  };

const DetailedPage = ({id,name,description,chargePerHr,image,instruments}: Props) => {
  return (
    <div>DetailedPage</div>
  )
}

export default DetailedPage