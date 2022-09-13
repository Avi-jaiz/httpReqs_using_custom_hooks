import { useCallback } from "react";

const useHttps = (requestConfig,applyData)=>
{

     const sendRequests =useCallback(async ()=>
     {

     const response = await fetch(requestConfig.url,{
        method:requestConfig.method ? requestConfig.method : "GET",
        headers:requestConfig.headers ? requestConfig.headers: {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body): null,
     })

     const data = await response.json();

     applyData(data)

     },[requestConfig,applyData])

return{
    sendRequests:sendRequests,
}

}


export default useHttps;