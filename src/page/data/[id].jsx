import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const Viewpage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const mypg = async () => {
      try {
        const res = await axios.get(
          `https://server.mochinime.cyou/view/${decodeURIComponent(id)}`
        )
        setData(res.data.anime)
      } catch (err) {
        console.log(err)
      }
    }
    mypg()
  }, [id])

  if (!data) {
    return (
      <div className="w-full h-svh flex justify-center items-center font-bold">
        loading...
      </div>
    )
  }

  return (
    <div className="w-full min-h-max max-w-5xl mx-auto pt-20">
      {data.map((anime, index) => (
        <div key={index} className="">

          {/* Info Anime */}
          <div className="flex gap-1 mb-8">
            <img
              src={anime.image}
              alt={anime.title}
              className="w-48 rounded shadow"
            />

            <div className="  flex justify-items-center items-center">
              <div className="">
                <h1 className="text-xl font-bold mb-1">
                  {anime.content.judul}
                </h1>

                <p className="text-sm text-gray-500 mb-2">
                  {anime.content.japanese}
                </p>

                <p className="text-sm">
                  <b>Tipe:</b> {anime.content.tipe}
                </p>

                <p className="text-sm">
                  <b>Produser:</b> {anime.content.produser}
                </p>

                <p className="text-sm">
                  <b>Total Episode:</b> {anime.episodeCount}
                </p>
              </div>
            </div>
          </div>

          {/* Daftar Episode */}
          <div className="w-full bg-gray-800">
            <h2 className="text-xl font-bold">
              Daftar Episode
            </h2>

            <div className="overflow-y-auto w-full h-68 bg-gray-800 ">
              {anime.eps.map((ep, i) => (
                <div className="w-full h-16"> <Link
                  key={i}
                  to={`/strim/${encodeURIComponent(ep.plink)}`}
                  className=" cursor-pointer "
                >
                  {ep.ptitle}
                </Link> </div>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Viewpage
