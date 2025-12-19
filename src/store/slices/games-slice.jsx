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

export const getGameDetails = createAsyncThunk('getGameDetails', async (gameId) => {
    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, {
        headers: {
            'X-RapidAPI-Key': XRapidAPIKey,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        params: {
            id: gameId
        }
    })
    console.log(data);
    
    return data
})

const initialState = {
    message: "",
    loading: false,
    error: "",
    data: [],
    game: ""
}

const gamesSlice = createSlice({
    name: "game",
    initialState,
    extraReducers: (builder) => {
        builder
            // ------------------------get Games ---------------------------
            .addCase(fetchData.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(fetchData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = payload
            })
            .addCase(fetchData.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(getGameDetails.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getGameDetails.fulfilled, (state, { payload }) => {
                state.loading = false
                state.game = payload
            })
            .addCase(getGameDetails.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export default gamesSlice.reducer