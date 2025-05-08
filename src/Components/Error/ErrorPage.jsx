import { Link, useRouteError } from "react-router"

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  
  return (
    <div>
      <h1>Oops !!!</h1>
      <p>Uh Oh, something went wrong! {error.message}</p>
      <Link to="/"><button>Go Home</button></Link>
    </div>
  );
}

export default ErrorPage
