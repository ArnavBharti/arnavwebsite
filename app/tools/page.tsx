import IrisPredictor from "./components/iris-predictor";

export default function Page() {
  return (
    <div role="main">
      <h1 className="text-2xl font-bold py-4 text-red-700">tools</h1>
      <div className="py-2">
        <IrisPredictor />
      </div>
      <p className="py-2">© {new Date().getFullYear()}</p>
    </div>
  );
}
