import React ,{useState,useEffect,useMemo} from "react";

function Hook(){
    const [user, userState]=useState({
        userName:"Parkash",
        userEmail:"parkash.official1308@",
        city:"Nagrparkar",
        phone:"0345342332",
        address:"village xyz tahsil sdfd",
    })
    const update=(e)=>{
        userState(prev=>({...prev,[e.target.name]:e.target.value}))
        console.log(user);
    }
    return(
        <div>
            <form>
                <h1>User-Information</h1>
                <input placeholder="enter-user-name" type="text" name="userName" onChange={update}></input><br/>
                <input placeholder="enter-email" type="text" name="userEmail" onChange={update}></input><br/>
                <input placeholder="enter-city-name" type="text" name="city" onChange={update}></input><br/>
                <input placeholder="enter-phone-name" type="text" name="phone" onChange={update}></input><br/>
                <input placeholder="enter-address-name" type="text" name="address" onChange={update}></input><br/>
                <button >Submit</button>
            </form>
        </div>
    );
}
export default Hook;