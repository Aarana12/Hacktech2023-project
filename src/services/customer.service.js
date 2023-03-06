import http from "../http-common";

class CustomerDataService {
    findByUsernameCustomer(title) {
      return http.get(`/customer?username=${title}`);
    }
    
  }
  export default new CustomerDataService();