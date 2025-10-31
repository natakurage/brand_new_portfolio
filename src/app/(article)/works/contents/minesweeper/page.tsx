import { MineSweeper } from '@/components/MineSweeper';
import Socials from '@/components/Socials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MineSweeper | ナタクラゲ / 千本槍みなも",
  description: "マインスイーパー"
};

export default function MineSweeperPage() {
  return (
    <>
      <h2 className="text-center">MineSweeper</h2>
      <p className="text-center max-w-xl mx-auto">
        ただのマインスイーパー
      </p>
      <MineSweeper />
      <Socials size={32} noColor className="mt-5" />
    </>
  );
}
