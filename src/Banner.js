import { useState } from "react";
import FarmerDataService from "./services/farmer.service"
import CustomerDataService from "./services/customer.service"

function Banner(props) {

    const username = props.userData.username;

    const [displayName, setDisplayName] = useState(props.userData.display_name);
    const [info, setInfo] = useState("");

    function displayInfo()
    {
        switch (props.userData.user_role) {
            case "farmer":
                const result = FarmerDataService.findByUsernameFarmer(username);

                result.then((response) => {
                    const responseResult = response.data[0]; 
                    const farmName = responseResult.farm_name;
                    setInfo(farmName);
                }).catch(() => {
                    alert("Can't find Farmer");
                });                
                break;
            

                case "customer":
                const resultRp = CustomerDataService.findByUsernameCustomer(username);

                resultRp.then((response) => {
                    const responseResult = response.data[0]; 
                    const name = responseResult.display_name;
                    setInfo(name);
                }).catch(() => {
                    alert("Can't find Customer");
                });                
                break;

        }

        return [displayName, info];
        
    }

    return (
        <>
            <h1>Cultivate<span style={{float: 'right', textAlign:'right'}}>{displayInfo()[0]}<br></br>{displayInfo()[1]}</span></h1>
            <br></br>
            <h1> </h1>
        </>
    );
}

export default Banner;