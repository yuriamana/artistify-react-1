import { Link } from "react-router-dom";
import "./../styles/not-found.css";

export default function Page404() {
  return (
    <div className="not-found">
      <h1 className="title">404</h1>
      <span>Oh no !!!</span>
      <span>You seem lost friend :(</span>
      <span>
        Go back to the &nbsp;<Link to="/">home page</Link>
      </span>
    </div>
  );
}
