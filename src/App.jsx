/*
Created A Server
HMR - Hot module Replacement
File Watcher Algorithm (written in c++)
Bundling
Minify
Cleaning our Code
Developement and Production Build
Super Fast build Algorithm
image Optimization
Caching while Developement
Compression
Compatible With old Browsers
HTTPS on dev 
Manages Port number
consistant Hashing algorithm
Zero Configuration
Transitive dependicies
Treeshaking - Removing unwanted code
 

*/

// This Should be Our App Layout

 /*
    Header
      -logo(title)
      -NavItems(right Side)
      -Cart
    Body
      -search Bar
      - RestrauntList
          -RestrauntCard (many Cards)
              -image
              -name
              -rating
              -cusines
    Footer
      -Links
      -Copyright
    */

import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());

// root.render(title);

// const div = React.createElement(
//   "div",
//   {
//     className: "container",
//     key: "divMain",
//   },

//   [
//     React.createElement(
//       "h1",
//       {
//         className: "heading1",
//         key: "h1",
//       },
//       "Heading 1 from Parcel"
//     ),
//     React.createElement("ul", { key: "ul1" }, [
//       React.createElement("li", { key: "li1" }, "Home"),
//       React.createElement("li", { key: "li2" }, "About"),
//       React.createElement("li", { key: "li3" }, "contact-Us"),
//     ]),
//   ]
// );


// const h1 =  (
//   <h1 className="h1" id="h1" key="h1">
//     {}
//     Hello React!
//   </h1>
// );


//react Element
// const title =  (
//   <>
//   <h1> Food Villa</h1>
//   </>
// );

// const HeaderComponent = ()=> (
//     <h1> Hello Saurabh!</h1>
//   );

// const HeaderComponent =  function() {
//   return (
//     <h1> Hello Saurabh!</h1>
//   )

// }



//config driven UI
// const BurgerKing = {
//   name: "Burger King!",
//   image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
//   cusines: ["Burgers", "American"],
//   rating: "4.2"
// }




// const RestrauntCard = (props) => {
//   // console.log(props);
//   return (
//     <div className="card">

//       {/* <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.restraunt.data?.cloudinaryImageId}`} /> */}

//       <h2>{props.restraunt.data?.id}</h2>
//       <h2>{props.restraunt.data?.name}</h2>
//       <h4>{props.restraunt.data?.cuisines.join(' , ')}</h4>
//       <h5>{props.restraunt.data?.avgRating} &#9733;</h5>
//       <h6>Order coming in {props.restraunt.data?.sla.lastMileTravel} Minutes...</h6>
//     </div>
//   )
// }



//Optional Chaining
// const RestrauntCard = (props) => {

//   console.log(props);
//   return (
//     <div className="card">

     
//       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.restraunt.data?.cloudinaryImageId}`} />
//       <h2>{props.restraunt.data?.id}</h2>
//       <h2>{props.restraunt.data?.name}</h2>
//       <h4>{props.restraunt.data?.cuisines.join(' , ')}</h4>
//       <h5>{props.restraunt.data?.avgRating} &#9733;</h5>
//       <h6>Order coming in {props.restraunt.data?.sla.lastMileTravel} Minutes...</h6>
//     </div>
//   )
// }


//Object De
// const RestrauntCard = ({restraunt}) => {

//   return (
//     <div className="card">

     
//       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restraunt.data?.cloudinaryImageId}`} />
//       <h2>{restraunt.data?.id}</h2>
//       <h2>{restraunt.data?.name}</h2>
//       <h4>{restraunt.data?.cuisines.join(' , ')}</h4>
//       <h5>{restraunt.data?.avgRating} &#9733;</h5>
//       <h6>Order coming in {restraunt.data?.sla.lastMileTravel} Minutes...</h6>
//     </div>
//   )
// }


//best type Object DeStructuring
// const RestrauntCard = ({name,id,cuisines,lastMileTravelString,cloudinaryImageId,avgRating}) => {


//   return (
//     <div className="card">

//       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
//       <h2>{name}</h2>
//       <h4>{cuisines.join(' , ')}</h4>
//       <h5>{avgRating} &#9733;</h5>
//       <h6>Order coming in {lastMileTravelString} Minutes...</h6>
//       <h2>{id}</h2>

//     </div>
//   )
// }





// const Body = () => {
//   return (
//     <div className="body">
//       <RestrauntCard name={RestrauntList2[0].data.name}  cuisines={RestrauntList2[0].data.cuisines}  cloudinaryImageId={RestrauntList2[0].data.cloudinaryImageId}  id={RestrauntList2[0].data.id}  lastMileTravelString={RestrauntList2[0].data.lastMileTravelString} />


//       {/* <RestrauntCard name={RestrauntList2[0].data.name} cuisines={RestrauntList2[0].data.cuisines}/>
//       <RestrauntCard name={RestrauntList2[0].data.name} cuisines={RestrauntList2[0].data.cuisines} />
//       <RestrauntCard name={RestrauntList2[0].data.name} cuisines={RestrauntList2[0].data.cuisines} /> */}

//     </div>
//   )
// }

 /* <RestrauntCard {...RestrauntList2[0].data} />
      <RestrauntCard {...RestrauntList2[1].data}/>
      <RestrauntCard {...RestrauntList2[2].data} />
      <RestrauntCard {...RestrauntList2[3].data} /> */


// const RestrauntList1 = [

//   {
//     data: {
//       "id": "792015",
//       "name": "The Hazelnut Factory",
//       "cloudinaryImageId": "338dab56ef079d7e35e80485e231b533",
//       "locality": "Civil Lines",
//       "areaName": "Naveen Market",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Bakery",
//         "Sweets",
//         "Pizzas",
//         "Pastas",
//         "Burgers",
//         "Beverages",
//         "Desserts"
//       ],
//       "avgRating": 4.6,
//       "parentId": "209462",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "100+",
//       "promoted": true,
//       "adTrackingId": "cid=14993083~p=0~adgrpid=14993083#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=792015~eid=ca80550e-fa68-45a1-a9ce-03c52812d8e6~srvts=1722449524995~collid=45995",
//       "sla": {
//         "deliveryTime": 26,
//         "lastMileTravel": 3.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "3.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-07-31 23:59:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {},
//           "textBased": {},
//           "imageBased": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹50 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=792015",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }

//   },

//   {
//     data: {
//       "id": "686198",
//       "name": "Chinese Wok",
//       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//       "locality": "Metro Station",
//       "areaName": "Moti Jheel",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Chinese",
//         "Asian",
//         "Tibetan",
//         "Desserts"
//       ],
//       "avgRating": 4.3,
//       "parentId": "61955",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 20,
//         "lastMileTravel": 2.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "2.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 01:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Chinese.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {},
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "Rxawards/_CATEGORY-Chinese.png",
//                   "description": "Delivery!"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹169"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=686198",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "320564",
//       "name": "Wow! Momo",
//       "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
//       "locality": "Arya Nagar",
//       "areaName": "Swaroop Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Tibetan",
//         "Healthy Food",
//         "Asian",
//         "Chinese",
//         "Snacks",
//         "Continental",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.2,
//       "parentId": "1776",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 23,
//         "lastMileTravel": 1.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "1.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Chinese.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "Rxawards/_CATEGORY-Momos.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {},
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "Rxawards/_CATEGORY-Chinese.png",
//                   "description": "Delivery!"
//                 }
//               },
//               {
//                 "attributes": {
//                   "imageId": "Rxawards/_CATEGORY-Momos.png",
//                   "description": "Delivery!"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹129"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=320564",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "732264",
//       "name": "Khadak Singh Da Dhaba",
//       "cloudinaryImageId": "8144bf37947c161953f656308d1bfc30",
//       "locality": "Rajeet nagar",
//       "areaName": "Lajpat Nagar 61",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "North Indian",
//         "Mughlai",
//         "Tandoor",
//         "Indian",
//         "Snacks"
//       ],
//       "avgRating": 4.3,
//       "parentId": "13170",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 31,
//         "lastMileTravel": 4.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "4.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
//                   "description": "Delivery!"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {},
//           "textBased": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=732264",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "550338",
//       "name": "The Milkshake Co.",
//       "cloudinaryImageId": "zvgtogxtf9d4sikuajdn",
//       "locality": "Ashok Nagar",
//       "areaName": "Harsh Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Beverages",
//         "Ice Cream",
//         "Desserts",
//         "Healthy Food",
//         "Pastas",
//         "Waffle",
//         "Mexican",
//         "sandwich"
//       ],
//       "avgRating": 4.4,
//       "veg": true,
//       "parentId": "330731",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "100+",
//       "promoted": true,
//       "adTrackingId": "cid=15644820~p=1~adgrpid=15644820#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=550338~eid=8774110f-ffd0-4492-a0e0-668c44e276eb~srvts=1722449524995~collid=45995",
//       "sla": {
//         "deliveryTime": 23,
//         "lastMileTravel": 3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "3.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 03:00:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {},
//           "imageBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹199",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=550338",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "77700",
//       "name": "R.S Bhojnalaya",
//       "cloudinaryImageId": "wniumg41joijmp5bscis",
//       "locality": "Avon Market Road",
//       "areaName": "Kakadeo",
//       "costForTwo": "₹200 for two",
//       "cuisines": [],
//       "avgRating": 4.2,
//       "veg": true,
//       "parentId": "163921",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "10K+",
//       "sla": {},
//       "availability": {},
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {},
//       "aggregatedDiscountInfoV3": {},
//       "differentiatedUi": {},
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {},
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=77700",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "538760",
//       "name": "Side Walk Bakehouse & Cafe",
//       "cloudinaryImageId": "1005de73d618b55d60dc9ea0809b4171",
//       "locality": "Arya Nagar",
//       "areaName": "Swaroop Nagar",
//       "costForTwo": "₹550 for two",
//       "cuisines": [
//         "Beverages",
//         "Continental",
//         "Pizzas",
//         "Burgers",
//         "Cafe",
//         "Desserts",
//         "Bakery",
//         "Italian"
//       ],
//       "avgRating": 4.3,
//       "parentId": "473251",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 22,
//         "lastMileTravel": 1.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "1.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 01:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {},
//           "textBased": {},
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "newg.png",
//                   "description": "Gourmet"
//                 }
//               }
//             ]
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=538760",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "686199",
//       "name": "Big Bowl",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_686199.JPG",
//       "locality": "Metro Station",
//       "areaName": "Moti Jheel",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Chinese",
//         "Tibetan",
//         "Desserts"
//       ],
//       "avgRating": 4.2,
//       "parentId": "434792",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 21,
//         "lastMileTravel": 2.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "2.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 01:00:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {},
//           "textBased": {},
//           "imageBased": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹179"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=686199",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "706003",
//       "name": "Tasty Point",
//       "cloudinaryImageId": "e1cd15279bd843d6cc7e8886e13a5bd6",
//       "locality": "Swaroop nagar tilak nagar",
//       "areaName": "Swaroop Nagar",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "Biryani",
//         "Snacks",
//         "Burgers",
//         "Chinese"
//       ],
//       "avgRating": 4.2,
//       "veg": true,
//       "parentId": "202114",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "20+",
//       "promoted": true,
//       "adTrackingId": "cid=15768387~p=2~adgrpid=15768387#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=706003~eid=94c4a9a1-835a-4290-9a45-9d4904b819c3~srvts=1722449524995~collid=45995",
//       "sla": {
//         "deliveryTime": 24,
//         "lastMileTravel": 1.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "1.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 00:30:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {},
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textExtendedBadges": {},
//           "textBased": {}
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=706003",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "327662",
//       "name": "Veer Ji Malai Chaap Wale",
//       "cloudinaryImageId": "b3cmejkkyfxumczpcn8q",
//       "locality": "Arya Nagar",
//       "areaName": "Swaroop Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Punjabi"
//       ],
//       "avgRating": 4.4,
//       "veg": true,
//       "parentId": "12056",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 18,
//         "lastMileTravel": 1.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-07-31 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Snacks.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {},
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {},
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Snacks.png"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {}
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=327662",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },

//   {
//     data: {
//       "id": "882841",
//       "name": "Unique Baker's",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/25913ea3-9b08-4598-9dbd-52854fb7dec5_882841.jpg",
//       "locality": "Khalasi Line",
//       "areaName": "Swaroop Nagar",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "Bakery"
//       ],
//       "veg": true,
//       "parentId": "14102",
//       "avgRatingString": "NEW",
//       "sla": {
//         "deliveryTime": 26,
//         "lastMileTravel": 1.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "1.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-08-01 00:00:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textExtendedBadges": {},
//           "textBased": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "isNewlyOnboarded": true,
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {},
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=882841",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
// ]


