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
          <div class="badge badge-soft badge-primary">Historical</div>
          <div class="badge badge-soft badge-primary">Horror</div>
          <div class="badge badge-soft badge-primary">Josei</div>
          <div class="badge badge-soft badge-primary">Magic</div>
          <div class="badge badge-soft badge-primary">Matrial Arts</div>
          <div class="badge badge-soft badge-primary">Mecha</div>
          <div class="badge badge-soft badge-primary">Military</div>
          <div class="badge badge-soft badge-primary">Music</div>
          <div class="badge badge-soft badge-primary">Mystery</div>
          <div class="badge badge-soft badge-primary">Psychological</div>
          <div class="badge badge-soft badge-primary">Parody</div>

        </div>
      </div>
    </>
  )
}
export default ListGenre;
