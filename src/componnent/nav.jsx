import { Home, Search } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 flex justify-items-center backdrop-blur-sm items-center fixed mt-0 mb-0 justify-between">
        <h1 className="font-extrabold text-sky-500 ml-3">mochinime</h1>
        <div className="mr-5 flex gap-3">
          <Link to="/"><Home color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
          <Link to="/search"><Search color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>

        </div>
      </div>
    </>
  )
}
export default Navbar;
