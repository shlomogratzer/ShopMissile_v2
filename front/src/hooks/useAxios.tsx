import { useState } from "react";
import axios from 'axios'

 function useAxios<T>(url:string):any {
    const [data, setdata] = useState<T|null>(null)
    const [error, setError] = useState<string|null>(null)
    
    const postData = async(anydata:any) => {
        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(anydata),
                headers: {
                  "Content-Type": "application/json",
                },
              })
              if(!res.ok){
                const resError = await res.json()                
                throw new Error(`${resError.message}`)
              }
              const rawData =await res.json()
              console.log(rawData);
              
              setdata(rawData)
        } catch (error:any) {
            setError(error);
            
        }
    

            // const response = await axios.post(url,{
            //     anydata
            // })     
   
      
    }
    return {data,error,postData}
}
export default useAxios
