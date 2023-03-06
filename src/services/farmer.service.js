import http from "../http-common";

class FarmerDataService {
    findByUsernameFarmer(title) {
      return http.get(`/farmer?username=${title}`);
    }
    
  }
  export default new FarmerDataService();