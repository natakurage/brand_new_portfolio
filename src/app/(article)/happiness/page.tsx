import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "幸せ | ナタクラゲ / 千本槍みなも",
  description: "幸せは見つかりませんでした。"
};

export default function HapinessPage() {
  return (
    <>
      <h1 className="text-center text-3xl">404</h1>
      <p className="text-center">Happiness is not found in this world.</p>
    </>
  );
}
