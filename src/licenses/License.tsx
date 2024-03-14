import License_2024_3_14 from '@/src/licenses/archives/V2024.3.14'
import License_2024_3_14_2 from "@/src/licenses/archives/V2024.3.14.2"

export const licensesVersionMap = new Map<string, () => JSX.Element>([
  ["2024.3.14", License_2024_3_14],
  ["2024.3.14.2", License_2024_3_14_2]
])

function LicenseNotFound () {
  return <p>License Not Found.</p>
}

export default function License(props: {version: string}) {
  const LicenseEl = licensesVersionMap.get(props.version) || LicenseNotFound
  return (<><LicenseEl/></>)
}
