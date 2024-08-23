"use client"

import { decodeUrlSafeToBase64, decryptSentence } from "@/utils/wordEncrypterDecrypter"
import { useSearchParams } from "next/navigation"

const Title = () => {
  const searchparam = useSearchParams()
  const stringTitle = decryptSentence(decodeUrlSafeToBase64(searchparam.get("n") || ""))

  return (
    <div className="font-['poppins'] text-2xl font-medium">{stringTitle}</div>
  )
}

export default Title