import License from '@/components/License';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export async function generateMetadata(props: { params: Promise<{ version: string }>}) {
  const params = await props.params;
  return {
    title: `ナタクラゲライセンス v${params.version} | ナタクラゲ / 千本槍みなも`,
    description: "ナタクラゲライセンスのアーカイブページ"
  };
}

export async function generateStaticParams() {
   const dirPath = path.join(process.cwd(), "markdowns", "licenses");
    const mdFiles = [] as string[];
    try {
      const files = fs.readdirSync(dirPath);
      mdFiles.push(...files.map(e => path.basename(e, path.extname(e))));
    } catch (error) {
      console.log(error);
    }
  return mdFiles.map((version: string) => {
    return { version };
  });
}

export default async function LicenseOfVersion(props: { params: Promise<{ version: string }>}) {
  const params = await props.params;
  const version = params.version;
  return (
    <>
      <p>注意: 以下のライセンスは現在有効ではありません！詳しくは
        <Link href="/policy">ポリシーと規約</Link>を参照してください！
      </p>
      <License version={version} />
      <Link href="/policy/archives">別の時点でのライセンスを見る</Link>
    </>
  );
}
