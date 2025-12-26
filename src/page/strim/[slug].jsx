import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Strm = () => {
  const { slug } = useParams();

  const [stream, setStream] = useState(null);
  const [view, setView] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);

        const localId = localStorage.getItem("id-anime");

        const [streamRes, viewRes] = await Promise.all([
          axios.get(
            `https://server.mochinime.cyou/striming/${encodeURIComponent(slug)}`
          ),
          localId
            ? axios.get(
              `https://server.mochinime.cyou/view/${encodeURIComponent(
                localId
              )}`
            )
            : Promise.resolve(null),
        ]);

        setStream(streamRes.data);
        setView(viewRes?.data || null);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat data streaming");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [slug]);

  /* ================= STATE ================= */

  if (loading) {
    return (
      <div className="w-full h-svh flex justify-center items-center">
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-svh flex justify-center items-center text-red-500">
        {error}
      </div>
    );
  }

  if (!stream?.success) {
    return (
      <div className="w-full h-svh flex justify-center items-center">
        Stream tidak tersedia
      </div>
    );
  }

  /* ================= DATA ================= */

  const anime = view?.anime?.[0];

  const currentEpisode = anime?.eps?.find(
    (ep) => ep.plink === slug
  );

  /* ================= RENDER ================= */

  return (
    <div className="pt-20 px-4 md:flex md:gap-4 md:justify-center">
      {/* PLAYER */}
      <iframe
        src={stream.videoStream}
        title="Anime Stream"
        className="w-full md:w-1/2 h-[220px] md:h-[360px] rounded mb-6"
        allowFullScreen
        loading="lazy"
      />

      {/* INFO + EPISODE */}
      {anime && (
        <div className="md:w-1/2">
          {/* JUDUL EPISODE */}
          <h1 className="text-xl font-bold mb-2">
            {currentEpisode?.ptitle}
          </h1>

          {/* LIST EPISODE */}
          <h2 className="text-lg font-semibold mb-2">
            Daftar Episode
          </h2>

          <div className="w-full h-[400px] md:h-64 overflow-y-auto">
            {anime.eps.map((ep, i) => (
              <div
                key={i}
                className={`w-full h-10 flex px-3 mt-2 rounded transition
                  ${ep.plink === slug
                    ? "bg-sky-500 text-white"
                    : "hover:bg-sky-500 hover:text-white"
                  }`}
              >
                <Link
                  to={`/strim/${encodeURIComponent(ep.plink)}`}
                  className="w-full"
                >
                  {ep.ptitle}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Strm;
