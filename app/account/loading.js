import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p>Loading account information...</p>
    </div>
  );
}

export default loading;
