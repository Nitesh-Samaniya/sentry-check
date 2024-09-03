import * as Sentry from "@sentry/react";

function App() {
  return (
    <button type="button" onClick={()=>{throw Error("checking the sentry error.")}}>Sentry Btn</button>
  );
}

export default Sentry.withProfiler(App);
