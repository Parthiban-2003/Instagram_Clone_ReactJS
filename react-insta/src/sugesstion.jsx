import { useEffect, useState } from "react";

function Sugesttions() {

    const [profile,setProfile] = useState(null);
    const [sugesttions,setSugesttions] = useState([]);

    useEffect(()=>{
            fetch("http://localhost:3000/profile")
            .then((response)=>response.json())
            .then((results)=>setProfile(results))
            .catch((er)=>console.log(er));
    },[])

    useEffect(()=>{
        fetch("http://localhost:3000/suggestion")
        .then((response)=>response.json())
        .then((results)=>setSugesttions(results))
        .catch((error)=>console.log(error))
    },[])


    return(
        <>
            <div>
                <div className="sugesstions w-75 m-4">
                {
                    profile ? <div className="d-flex">
                    <img className="dp rounded-cricle" src={profile.avatar} alt="profile-picture" />
                    <h6>{profile.username}</h6>
                    <small className="ms-auto text-primary">Switch</small>
                </div> :
                <p>Loading...</p>
                }
                </div>
                <div className="d-flex">
                    <p>Sugesstion for You</p>
                    <b className="ms-auto">See All</b>
                </div>

                {
                    sugesttions.length > 0 ? (<div>
                        {
                            sugesttions.map((sugesttion) => {
                                return <div key={sugesttion.id}>
                                            <div className="d-flex">
                                                <img className="dp rounded-cricle" src={sugesttion.avatar} alt="profile-picture" />
                                                <h6>{sugesttion.username}</h6>
                                                <p className="text-primary ms-auto">Follow</p>
                                            </div>
                                    </div>
                            })
                        }
                    </div>) : (<div>
                        Loading...!!
                    </div>)
                }
            </div>
        </>
    )
}

export default Sugesttions;

