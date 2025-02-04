import "@/styles/css/globals.css"
import { queryClientInstance } from "@/common/services/react-query-instance"
import { CustomAppProps } from "@/common/types/app.type"
import { Toaster } from "@/components/_shadcn-ui/toaster"
import TopProgressBar from "@/components/atoms/top-progress-bar"
import { NuqsAdapter } from "nuqs/adapters/next/pages"
import { Hydrate, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const App: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(
          <>
            <NuqsAdapter>
              <Component {...pageProps} />
              <TopProgressBar />
            </NuqsAdapter>
          </>,
        )}
        <Toaster />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
