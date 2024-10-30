import BaseLayout from '@/app/components/BaseLayout';
import NotFoundPage from '@/app/components/NotFoundPage';

import '@/assets/scss/globals.scss';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <BaseLayout>
      <NotFoundPage />
    </BaseLayout>
  );
}