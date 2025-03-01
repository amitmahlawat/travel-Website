export const Inventory = [
    {
      Name: "Hotel Silver Clé",
      Image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/508811753.webp?k=39825c6edd5bc663952210701362079f33b557ed34677c3d4ba2d09471062333&o=",
      Description:
        "Situated in Hyderabad, 7.2 km from ISB, Hotel Silver Clé features accommodation with a fitness centre, free private parking, a terrace and a restaurant.",
      Rating: 5,
      id: 1,
      Category: " Hotel",
      Price: 50
    },
    {
      Name: "Holiday Inn Express Hyderabad Banjara Hills, an IHG Hotel",
      Image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/272667516.webp?k=3a778b7f90005c0bb78fba2aee5519e2dba4f913d49d2e14aa1e0b757c94fd1e&o=",
      Description:
        "Conveniently located in the upscale area of Banjara Hills, Holiday Inn Express Hyderabad Banjara Hills is a 26-minute drive from Secunderabad Railway Station and a 40-minute drive from the Rajiv...",
      Rating: 4,
      id: 2,
      Category: " Hotel",
      Price: 50
    },
    {
      Name: "Hotel Consulate",
      Image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/252216406.webp?k=9800b76e324618539b7d9ce0bb2790271009ad24d7b6b0e279d7895bddb91565&o=",
      Description:
        "Set in Hyderabad, 3.6 km from ISB, Hotel Consulate offers accommodation with a terrace, free private parking and a restaurant. This 3-star hotel offers room service, a 24-hour front desk and free...",
      Rating: 4,
      id: 3,
      Category: " Villa",
      Price: 200
    },
    {
      Name: "Hotel Silver Clé",
      Image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/22148091.webp?k=fca1348f945b49289377140313169ea757fb76aadf23d1f24df1fc1ba2516513&o=",
      Description:
        "Featuring an outdoor swimming pool, spa and wellness centre and fitness centre, Trident, Hyderabad is close to Raheja Mindspace IT Park. It has a well-equipped business centre and meeting space.",
      Rating: 3,
      id: 4,
      Category: " Villa",
      Price: 150
    },
    {
      Name: "Neemtree Apartments",
      Image:
        "https://cf.bstatic.com/xdata/images/hotel/square600/366863375.webp?k=0136352149790962d5b5a689ab6671874378f5d27562832ee905c60d9cd499eb&o=",
      Description:
        "Set 1.8 km from City Centre Mall, 2.8 km from Ravindra Bharathi and 3.5 km from AP State Archaeology Museum, Neemtree Apartments offers accommodation located in Hyderabad.",
      Rating: 3,
      id: 5,
      Category: " Villa",
      Price: 100
    },
  ];

  
  import React, { useState, useEffect } from "react";
  import { collection, onSnapshot } from "firebase/firestore";
  import { db } from "./firebaseConfig";
  import { useSelector ,useDispatch} from "react-redux";
  import { InventoryActions } from "../Components/Store";
const HotelInventory = () => {
  const [hotels, setHotels] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
    const hotelsCollection = collection(db, "hotels");
    const unsubscribe = onSnapshot(hotelsCollection, (snapshot) => {
      const hotelList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHotels(hotelList);
      console.log(hotels)
      dispatch(InventoryActions.updateInventory(hotelList))
     
    });

    return () => unsubscribe(); // Cleanup listener on unmount

  
  }, []);


  return (
    <div>
      
    </div>
  )
}

export default HotelInventory
