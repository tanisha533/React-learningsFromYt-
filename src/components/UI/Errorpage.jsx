export const Errorpage= () =>{
  const error =useRouteError();
  console.log(error);
  return(
    <div>
        <h1>OOps! an error occurred .</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/"> <button>
        Go Home
        </button>
      </NavLink>
    </div>
  )
 };