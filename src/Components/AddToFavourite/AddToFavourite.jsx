import React from 'react'
import { Trash2 } from 'lucide-react';
import  {useSelector} from "react-redux"

const AddToFavourite = () => {
    

    const favourite = useSelector((state) => state.favourite.love);
    console.log(favourite)
  return (
      <div>
          <div></div>
          <div>
              <div>
                  <h3>Product Name</h3>
                  <h3>Unit Price</h3>
                  <h3>Stock Status</h3>
                  <h3>Actions</h3>
              </div>
              <div>
                  <div><Trash2/></div>
                  <div>
                      <img src="" alt="" />
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>
    </div>
  )
}

export default AddToFavourite