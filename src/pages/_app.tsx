import "@/styles/css/globals.css";
import { Toaster } from "@/components/_shadcn-ui/toaster";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { CustomAppProps } from "@/common/types/app.type";
import { queryClientInstance } from "@/common/services/react-query-instance";
import TopProgressBar from "@/components/atoms/TopProgressBar";

const App: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(
          <>
            <Component {...pageProps} />
            <TopProgressBar />
          </>
        )}
        <Toaster />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
