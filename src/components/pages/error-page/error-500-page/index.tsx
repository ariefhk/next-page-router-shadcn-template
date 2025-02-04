import { Button } from "@/components/_shadcn-ui/button"
import Link from "next/link"
import { useRouter } from "next/router"

const Error500Page = () => {
  const router = useRouter()

  return (
    <div className="h-svh font-inter">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">500</h1>
        <span className="font-medium">Ups! Server Error!</span>
        <p className="text-center text-muted-foreground">
          Kelihatannya halaman yang kamu akses sedang bermasalah. <br />
          Coba lagi nanti ya.
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

export default Error500Page
