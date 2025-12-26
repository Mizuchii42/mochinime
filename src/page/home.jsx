import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getMyapi = async () => {
      try {
        const res = await axios.get("https://server.mochinime.cyou/home")
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMyapi()
  }, [])

  if (!data) {
    return (
      <div className="w-full h-svh flex justify-center items-center font-extrabold text-primery">
        <span class="loading loading-ball loading-xl"></span>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2">
      {data.data.map((section, index) => (
        <section key={index} className="pt-20">

          {/* Judul Section */}
          <h1 className="text-2xl font-bold mb-3">
            {section.section}
          </h1>

          {/* Grid Anime */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2">
            {section.content.map((ani, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={ani.image}
                  alt={ani.title}
                  className="w-32 h-44 object-cover rounded shadow"
                />

                <h2 className="mt-2 text-sm font-semibold line-clamp-2">
                  <Link to={`/data/${ani.link}`} >{ani.title} </Link>
                </h2>
              </div>
            ))}
          </div>

        </section>
      ))
      }
    </div >
  )
}

export default Home
