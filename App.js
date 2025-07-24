import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/PtcuVPuj9G_6jf_G2tlovG-zmOz4ysfQXAIznwLhIUo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYnVyZ2VyLWRl/bGl2ZXJ5LWxvZ28t/dmVjdG9yLWljb25f/MTAxNTgzMi0zOTUw/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
          alt="Cravory-Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const ResturantCard = (props) => {

  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.card.info.cloudinaryImageId}
        alt="Cravory-Logo"
      />
      <h4>{resData.card.card.info.name}</h4>
      <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
      <h4>{resData.card.card.info.avgRatingString}</h4>
      <h4>{resData.card.card.info.costForTwo}</h4>
      <h4>{resData.card.card.info.deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "810579",
          name: "Nandhana Palace",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/ad122ab6-e98b-4a8a-9fa4-c862197e003e_810579.jpg",
          locality: "Egmore",
          areaName: "Mount Road",
          costForTwo: "₹500 for two",
          cuisines: ["Andhra", "Biryani", "South Indian"],
          avgRating: 4.4,
          parentId: "2120",
          avgRatingString: "4.4",
          totalRatingsString: "7.3K+",
          promoted: true,
          adTrackingId:
            "cid=31150443~p=0~adgrpid=31150443#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=810579~plpr=COLLECTION~eid=03d7ac29-1ddf-443b-853d-a5ca90f0d323~srvts=1753363647925~collid=83639",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-25 02:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31150443",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=810579&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "966378",
          name: "AMBUR STAR BRIYANI",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/8/159eec12-d31f-4f70-a8d3-385ab3eac0a0_387ab1dc-53e9-4f21-86ce-b3bd303366cd.jpg",
          locality: "Raillway station",
          areaName: " Chennai Central",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani"],
          avgRating: 4.4,
          parentId: "5455",
          avgRatingString: "4.4",
          totalRatingsString: "896",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=966378&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "7726",
          name: "Samco",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/16/1895657b-f477-49bb-b4cf-b49133128b00_773a1733-c32f-46a0-bf5f-b1e12a2342c2.jpeg",
          locality: "Alwarpet",
          areaName: "Alwarpet",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "South Indian",
            "Chinese",
            "Arabian",
            "Kerala",
            "Mughlai",
          ],
          avgRating: 4.5,
          parentId: "1235",
          avgRatingString: "4.5",
          totalRatingsString: "59K+",
          promoted: true,
          adTrackingId:
            "cid=31010704~p=1~adgrpid=31010704#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=7726~plpr=COLLECTION~eid=7d9eb727-6f9d-4c54-9e26-ccc7e9c449c2~srvts=1753363647925~collid=83639",
          sla: {
            deliveryTime: 60,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            slaString: "55-65 mins",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      description: "OnlyOnSwiggy",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "4.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31010704",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=7726&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "808267",
          name: "Buhari",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/3/23f90d3a-0c4b-4da0-80a3-b2cfeab18fd0_7d50e0ba-6962-40e2-81f4-f0d388dee12f.jpeg",
          locality: "Rajah Muthaiah Salai",
          areaName: "George Town",
          costForTwo: "₹396 for two",
          cuisines: ["Biryani", "Chinese"],
          avgRating: 4.4,
          parentId: "164",
          avgRatingString: "4.4",
          totalRatingsString: "1.1K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 1.1,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-24 23:50:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹1000",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=808267&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">search</div>
      <div className="reastrunt-container">
        {
          resList.map((restautrant) => <ResturantCard resData={restautrant} key={restautrant.card.card.info.id} />)
       
    
        }
        

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
