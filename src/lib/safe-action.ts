import { createSafeActionClient } from 'next-safe-action';

import { createClient } from './supabase/server';

export const safeAction = createSafeActionClient();

export const authSafeAction = safeAction.use(async ({ next }) => {
  const supabase = await createClient();

  const { data: user, error } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("You're not authorized.");
  }

  return next({ ctx: { user } });
});
