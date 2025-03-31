import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Secret Zone | ナタクラゲ / 千本槍みなも",
  description: "Secret Zone"
}

export default function SecretPage() {
  return (
    <>
      <div className="
        fixed top-0 left-0 w-screen h-screen z-[-2]
        bg-black">
      </div>
      <div className="
        fixed top-0 left-0 w-screen h-screen z-[-1]
        bg-[url('/images/logos/NTK.png')] bg-[length:20px_20px]">
      </div>
      <h1>Secret Zone</h1>
      <p>↓</p>
      <a href="https://drive.google.com/drive/folders/1YpBdkZkq45lZd2tgWBOWiBE6J7YAdtgV?usp=drive_link">
      link</a>
    </>
  )
}
