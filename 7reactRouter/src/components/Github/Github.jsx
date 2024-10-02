import React from "react";
import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  useEffect(() =>{
    fetch("https://api.github.com/users/shoneraju18")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      }) 
    }, [])
  

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers: {data.login}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shoneraju18')

    return response.json()
}
