"use client"

import { decodeUrlSafeToBase64, decryptSentence } from "@/utils/wordEncrypterDecrypter"
import { useRouter, useSearchParams } from "next/navigation"
import { IoIosArrowBack } from "react-icons/io"

const Title = () => {
  const searchparam = useSearchParams()
  const router = useRouter()
  const stringTitle =
    (decryptSentence(decodeUrlSafeToBase64(searchparam.get("n") || "")) ||
      decryptSentence(decodeUrlSafeToBase64(searchparam.get("n") || ""), "2BqQPTp9AFXWJLl5L2oYyR") ||
      decryptSentence(decodeUrlSafeToBase64(searchparam.get("cf") || ""), "4a85eb8300c5679e8d3a0461b8ed834d") ||
      decryptSentence(decodeUrlSafeToBase64(searchparam.get("pl") || ""), "18585412F2QWuZDSTmxW7Ts8W")) || "Project"

  return (
    <div className="flex gap-4 items-center">
      <div className="bg-[#22222c] w-max h-max p-3 cursor-pointer rounded-xl text-xl" onClick={() => router.back()}>
        <IoIosArrowBack />
      </div>
      <div className="font-['poppins'] text-2xl font-medium">{stringTitle}</div>
    </div>
  )
}

export default Title