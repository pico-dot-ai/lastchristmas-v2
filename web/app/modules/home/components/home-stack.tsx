'use client';

import { useState } from 'react';
import { UserCard } from '../../user/components/user-card';
import { WatchSafe } from '../../media-verification/components/watch-safe';
import { type UserProfile } from '../../user/user-types';

type HomeStackProps = {
  initialProfile: UserProfile | null;
  initialEmail?: string;
};

export function HomeStack({ initialProfile, initialEmail }: HomeStackProps) {
  const [accent, setAccent] = useState<string>(initialProfile?.gradientColor ?? 'ocean');

  return (
    <div className="page__stack">
      <UserCard initialProfile={initialProfile} initialEmail={initialEmail} onAccentChange={setAccent} />
      <WatchSafe gradientColor={accent} />
    </div>
  );
}
