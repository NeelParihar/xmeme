import React,{useContext} from 'react';
import axios from 'axios';
import { ThemeContext } from "providers/ThemeProvider";

const Like =  ({ width = 19, height = 19, color = '#000',memeId }) =>{ 
  const {setReload } = useContext(ThemeContext);
  const updateLike = async ()=>{
    try {
      const res = await axios({
        method: 'POST',
        url: `${process.env.BACKEND_URL}memes/${memeId}`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        console.log(res);
        setReload(true);
     
    } catch (err) {
      alert("Something went wrong, please try again! \n " + err.statusCode === 409 ? 'Meme with similar URL is already submitted' : err); // eslint-disable-line
      
    }
  };
  return (
  
  <img alt={"like"} onClick={() => updateLike()} width={width} height={height} fill={color} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9Il94MzJfMV9mYXZvcml0ZSI+PHBhdGggZD0ibTM4My44NzIgNTMuMDg3Yy02MS41NzQgMC0xMTIuOTc0IDQzLjUyNC0xMjUuMTM2IDEwMS40ODMtLjYyNyAyLjk4Ny00Ljg0NSAyLjk4OS01LjQ3MiAwLTEyLjE2Mi01Ny45NTktNjMuNTYxLTEwMS40ODMtMTI1LjEzNS0xMDEuNDgzaC0uMDAxYy0xMTcuNTUgMC0xNzIuODE5IDE0NS4yNjYtODQuOTk4IDIyMy40MDNsMTk5LjE3NCAxNzcuMjEyYzcuODA5IDYuOTQ4IDE5LjU4MiA2Ljk0OCAyNy4zOTEgMGwxOTkuMTc1LTE3Ny4yMTJjODcuODIxLTc4LjEzNyAzMi41NTItMjIzLjQwMy04NC45OTgtMjIzLjQwM3oiIGZpbGw9IiNmZTY0NmYiLz48Zz48cGF0aCBkPSJtMzgzLjg3MiA1My4wODdjLTcuMTIxIDAtMTQuMTAzLjU4OS0yMC45MDYgMS43MDggMTAyLjM3NSAxNi40NzMgMTQ1LjYzIDE0OC41MTkgNjMuMzg0IDIyMS42OTVsLTE5MS42MSAxNzAuNDgyIDcuNTY0IDYuNzNjNy44MDkgNi45NDggMTkuNTgyIDYuOTQ4IDI3LjM5MSAwbDE5OS4xNzUtMTc3LjIxMmM4Ny44MjEtNzguMTM3IDMyLjU1Mi0yMjMuNDAzLTg0Ljk5OC0yMjMuNDAzeiIgZmlsbD0iI2ZkNDc1NSIvPjwvZz48L2c+PC9zdmc+" />
)};

export default Like;
