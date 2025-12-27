import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Search = () => {
  const [value, setValue] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    if (!value) {
      setData([])
      return
    }

    const getSearch = async () => {
      try {
        const res = await axios.get(
          `https://server.mochinime.cyou/search/${encodeURIComponent(value)}`
        )
        setData(res.data.search)
      } catch (err) {
        console.log(err)
      }
    }

    getSearch()
  }, [value])

  return (
    <div className="w-full min-h-svh px-4">

      {/* Input */}
      <div className="pt-20 mb-6">
        <input
          placeholder="Judul anime..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="
            w-full max-w-xl mx-auto flex px-3 py-2 rounded
            border border-gray-300
            text-black dark:text-white
            outline-none
          "
        />
      </div>

      {/* Result */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4">
        {data.map((e, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <img
              src={e.image}
              alt={e.title}
              className="w-32 h-44 object-cover rounded shadow"
            />

            <h2 className="mt-2 text-sm font-semibold line-clamp-2">
              <Link
                to={`/data/${encodeURIComponent(e.link)}`}
                className="hover:text-sky-500"
              >
                {e.title}
              </Link>
            </h2>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {value && data.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          Anime tidak ditemukan
        </p>
      )}

    </div>
  )
}

export default Search
