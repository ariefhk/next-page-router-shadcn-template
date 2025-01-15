import Error500Page from "@/components/pages/ErrorPage/Error500Page"
import { useEffect, useState } from "react"

const Page = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    return <Error500Page />
  }

  return null
}

export default Page
