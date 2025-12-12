import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(user => {
    //             console.log(user);
    //             setData(user)
    //         })
    // }, [])

    return (
        <div className='text-center m-5 bg-gray-800 text-blue-100 text-4xl p-5'> Github Followers: {data.followers}
            {/* <img src={data.avatar_url} alt="Git Picture" width={300} /> */}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}