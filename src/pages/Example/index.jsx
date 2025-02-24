import { Link, Outlet } from "react-router-dom";

export const Example = () => {
  return (
    <div>
      <h1>Example Page</h1>
      <p>This is an example page.</p>
      <Link to="smallExample">link to small example</Link>
      <Outlet />
    </div>
  );
};
