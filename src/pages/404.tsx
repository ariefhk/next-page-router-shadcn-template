import { Button } from "@/components/_shadcn-ui/button"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Page = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    return (
      <div className="h-svh font-inter">
        <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
          <h1 className="text-[7rem] font-bold leading-tight">404</h1>
          <span className="font-medium">Ups! Halaman Tidak Ditemukan!</span>
          <p className="text-center text-muted-foreground">
            Kelihatannya halaman yang kamu cari tidak Ada <br />
            Atau sudah dihapus deh.
          </p>
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => router.back()}>
              Kembali
            </Button>
            <Button asChild>
              <Link href={"/"} className="flex items-center gap-x-2">
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Page
