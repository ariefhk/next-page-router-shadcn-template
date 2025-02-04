import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopProgressBar = () => {
  return <ProgressBar height="4px" color="#ff0000" options={{ showSpinner: false }} shallowRouting />;
};

export default TopProgressBar;
