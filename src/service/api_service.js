import { Navigate } from "react-router-dom";

export async function post(url, postBody) {
    const postOptions = {
        mode: "cors",
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postBody),
    }
    const response = await
        fetch(url, postOptions);
    if (response.status ===  200) {
        const data = await response.json();
        console.log("response", data);
        Navigate("/home")
        return data;
    } else {
        return null;
    }


}  
// http://chatlyapi1-03qoc155.b4a.run
