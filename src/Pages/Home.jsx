import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../store/slices/games-slice"
import Loading from "./Loading"
import bg from "../../public/Vidtest.MOV"
import { LiaRobotSolid } from "react-icons/lia"
import { Link } from "react-router-dom"
import Game from "../Components/Game/Game"
import { Helmet, HelmetProvider } from "react-helmet-async"
const Home = () => {
    const dispatch = useDispatch()
    const [cardsToShow, setCardsToShow] = useState(3);
    const data = useSelector((state) => state.games)
    useEffect(() => {
        dispatch(fetchData({}))
    }, [dispatch])

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 640) {
                setCardsToShow(3);
            } else if (width >= 640 && width < 1024) {
                setCardsToShow(4);
            } else {
                setCardsToShow(3);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Matrix</title>
            </Helmet>
            <section className="min-h-screen text-light ">
                <div className="relative h-screen  bg-cover bg-no-repeat bg-fixed bg-center" >
                    <video autoPlay muted loop loading="" className="bg-video hidden bg-cover xl:block min-h-screen">
                        <source src={bg} type="video/mp4" />                 
                    </video>
                    <div className="layer absolute right-0 left-0 top-0 bottom-0 "></div>
                    <div className="content absolute z-10 top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col items-center text-center gap-3 select-none">
                        <h5 className="text-7xl font-bold font-Creepster tracking-wider opacity-70 txtH pt-[4rem] md:pt-0">Welcome</h5>
                        <p className="font-luckiest opacity-70"><strong>TO</strong></p>
                        <p className="text-md sm:text-xl font-luckiest pb-10 md:pb-0 tracking-widest leading-5 opacity-70 txtH" >The Best Website for games. discover and play It</p>
                        <Link to={"/games"} className="p-5 rounded my-3  tracking-wider shadow shadow-black bg-main hover:bg-main-light">Discover Games</Link>
                    </div>
                </div>
                <div className="container py-5 md:px-4">
                    <h3 className="flex gap-2 text-xl sm:text-3xl items-center"><LiaRobotSolid className="text-second-light" />Personalized Recommendations</h3>
                    {!data?.loading ? <div className="">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 md:items-center md:justify-center mt-5">
                            {data.data?.slice(6, 6 + cardsToShow).map((game, i) => (
                                <Game key={i} game={game} />
                            ))}
                        </div>
                    </div> : <Loading />}
                </div>
            </section>
        </HelmetProvider>
    )
}

export default Home
