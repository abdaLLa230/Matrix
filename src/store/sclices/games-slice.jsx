import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const XRapidAPIKey = "fe550e65c4mshdee14986520ced7p1e62bdjsn9b05e61005e5"


export const fetchData = createAsyncThunk('fetchData', async ({ platform = "all" }) => {
    let params = { platform }
    
    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        headers: {
            'X-RapidAPI-Key': XRapidAPIKey,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        params
        
    })
    console.log(data.length);
    console.log(data);
    return data
})