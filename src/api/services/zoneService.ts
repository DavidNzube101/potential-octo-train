import {
   zoneUpdate,
   zoneRental
  } from "../endpoints/zoneEndPoint";
  import { POST_API,GET_API } from "../methods";
  import { ZoneUpdatePayload } from "../interface/zoneInterface";


  export const zone = async (data :ZoneUpdatePayload) => {
    return POST_API(data, zoneUpdate)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e?.response;
      });
  };


  export const rentalZone = async (vehicle_type_id: number) => {
    return GET_API( `${zoneRental}?vehicle_type_id=${vehicle_type_id}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e?.response;
    });
  };
  
  

  const zoneService = {
    zone,
    rentalZone
  };
  
  export default zoneService;
  