import { buildLandingMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

export const metadata = resolveMetadata(buildLandingMeta(), true);

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
