import Error404Page from "@/components/pages/error-page/error-404-page"
import { useEffect, useState } from "react"

const Page = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    return <Error404Page />
  }

  return null
}

export default Page
