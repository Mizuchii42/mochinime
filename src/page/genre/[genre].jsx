import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GenreView = () => {
  const { genre } = useParams()
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    const myApi = async () => {
      try {
        const res = await axios.get(`https://mochiserver.mochinime.cyou/genre/${genre}`);
        const myData = await res.data.data;
        return setAnime(myData);
      } catch (err) {
        console.log(err);
      }
    }
    myApi()
    console.log(anime)
  }, [genre])

  if (anime.length === 0) {
    return (
      <div className="w-full h-svh flex justify-center justify-items-center items-center">
        <span class="loading loading-ball loading-xl"></span>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
      {
        anime.map((anim, i) => {
          return (
            <div key={i}>
              <div className="flex flex-col items-center text-center">
                <img src={anim.image} className="w-32 h-44 object-cover rounded shadow" />
                <h1 className="mt-2 text-xs font-bold line-clamp-2"><Link to={`/data/${anim.linkPraf}`}>{anim.title.length > 20 ? anim.title.slice(0, 20) + "..." : anim.title}</Link></h1>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default GenreView;
