import axios from "axios";
const EMPLOYEE_API_BASE_URL="http://localhost:8090/api/v1"


class EmployeeService{
      saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/"+"employees",employee);
      }

      getAllEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+"getAllEmployee");
      }
      delete(id){
        
            return axios.delete(EMPLOYEE_API_BASE_URL+"/"+"delete"+"/"+id);
      }
}
export default new EmployeeService();