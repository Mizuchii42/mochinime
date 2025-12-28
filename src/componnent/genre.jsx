import { Link } from "react-router-dom";

const ListGenre = () => {
  return (
    <>
      <div className="">
        <h1 className="font-bold mb-3">Genre</h1>
        <div className="flex gap-2 w-full flex-wrap h-20 overflow-y-auto">
          <div class="badge badge-soft badge-primary"><Link to="/genre/Ecchi">Ecchi</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Action">Action</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Comedy">Comedy</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Adventure">Adventure</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Demons">Demons</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Drama">Drama</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Fantasy">Fantasy</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Game">Game</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Herem">Herem</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Historical">Historical</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Horror">Horror</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Josei">Josei</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Magic">Magic</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/matrial-arts">Matrial Arts</Link></div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Mecha">Mecha</Link></div>
          <div class="badge badge-soft badge-primary">Military</div>
          <div class="badge badge-soft badge-primary">Music</div>
          <div class="badge badge-soft badge-primary">Mystery</div>
          <div class="badge badge-soft badge-primary">Psychological</div>
          <div class="badge badge-soft badge-primary"><Link to="/genre/Parody">Parody</Link></div>

        </div>
      </div>
    </>
  )
}
export default ListGenre;
