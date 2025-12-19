import React, {  useState , useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Game from '../Components/Game/Game'
import Loading from './Loading'
import { MdExpandMore } from "react-icons/md"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { fetchData } from '../store/slices/games-slice'



const Games = () => {
    const [more, setMore] = useState(20)
    const data = useSelector((state) => state.games)
    const dispatch = useDispatch()
    useEffect(() => {
        if (data.data.length === 0) { 
            dispatch(fetchData({ platform: "all" }))  
        }
    }, [dispatch, data.data.length])

    return (

        <HelmetProvider>
            <Helmet>
                <title>Explore Games</title>
            </Helmet>
            <section className='pt-14'>
                <div className="container py-5 ">
                    
                    {!data?.loading ? <div className="">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 items-center justify-center mt-5">
                            {data?.data?.slice(0, more).map((game, i) => (
                                <Game key={i} game={game} />
                            ))}
                        </div>
                        <div className="next-btn mt-5 w-full flex justify-center">
                            <button onClick={() => setMore(more + 12)} className='p-4 bg-second flex items-center gap-1 rounded'>Show More <MdExpandMore size={20} /></button>
                        </div>
                    </div> : <Loading />}
                </div>
            </section>
        </HelmetProvider>
    )
}

export default Games