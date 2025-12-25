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
              `https://server.mochinime.cyou/view/${encodeURIComponent(localId)}`
            )
            : Promise.resolve(null),
        ]);

        setStream(streamRes.data);
        setView(viewRes?.data?.anime || null);
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
        Loading...
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

  /* ================= RENDER ================= */

  return (
    <div className="pt-20 max-w-6xl mx-auto px-4 w-full h-svh">
      {/* PLAYER */}
      <iframe
        src={stream.videoStream}
        title="Anime Stream"
        className="w-full h-[200px] rounded mb-8"
        allowFullScreen
        loading="lazy"
      />

      {/* EPISODE LIST */}
      {view && (
        <div>
          <h2 className="text-xl font-bold mb-4">Daftar Episode</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 w-full h-86 bg-gray-800 overflow-y-auto mb-20">
            {view[0]?.eps?.map((ep, i) => (
              <Link
                key={i}
                to={`/strim/${encodeURIComponent(ep.plink)}`}
                className="p-3 border rounded text-center hover:bg-sky-500 hover:text-white transition"
              >
                {ep.ptitle}
              </Link>
            ))}
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Strm;
