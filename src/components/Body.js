
import RestrauntCard from "./RestaurentCard"

import { RestrauntList2 } from "../Constants"

const Body = () => {
    return (
      <div className="body">
        {
          RestrauntList2.map((restraunt)=>{
            return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />
          })
        }
  
      </div> 
    )
  }

  export default Body
  
  