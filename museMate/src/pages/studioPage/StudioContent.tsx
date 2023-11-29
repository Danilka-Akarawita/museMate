import React from 'react'
import SampleData from '../../Utils/studioInfo'
import DetailedPage from './DetailedPage'
import { StudioType } from '../../types/selectedPageEnums'
type Props = {}

const StudioContent = (props: Props) => {
  
  return (
    <div>
      {SampleData.map((data:StudioType)=>
                (
                    <DetailedPage 
                    id={data.id}
                    name={data.name}
                    description={data.description}
                    instruments={data.instruments}
                    image={data.image}/>
                    
                ))}
    </div>
  )
}

export default StudioContent