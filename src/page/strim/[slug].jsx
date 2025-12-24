import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Strm = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const strma = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://server.mochinime.cyou/striming/${decodeURIComponent(slug)}`
        );
        setData(res.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat data streaming");
      } finally {
        setLoading(false);
      }
    };

    strma();
  }, [slug]); // Hapus 'data' dari dependency array

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="no-data-container">
        <p>Tidak ada data streaming tersedia</p>
      </div>
    );
  }

  return (
    <div className="stream-container pt-20">
      {data.success ? (
        <div className="stream-item">
          <iframe
            src={data.videoStream}
            title="Anime Stream"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
          {data.url && (
            <p className="source-url">
            </p>
          )}
        </div>
      ) : (
        <div className="error-container">
          <p>Streaming tidak tersedia</p>
        </div>
      )}
    </div>
  );
};

export default Strm;
