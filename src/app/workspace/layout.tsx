import { buildWorkspaceMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

export async function generateMetadata() {
  const meta = buildWorkspaceMeta();
  return resolveMetadata(meta);
}

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
