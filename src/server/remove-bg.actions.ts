import { requireAuth } from '@/middleware/auth-middleware';
import { db } from "@/server/db";
import { bgRemoverTrials } from '@/server/db/schema';
import { createServerFn } from '@tanstack/react-start';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

const removeBgInputSchema = z.object({
  image: z.url(),
});

export const checkTrial = createServerFn({ method: 'GET' })
  .middleware([requireAuth])
  .handler(async ({ context }) => {
    const { user } = context;
    try {
      const trial = await db.select().from(bgRemoverTrials).where(eq(bgRemoverTrials.userId, user.id)).limit(1)

      return { hasUsed: trial.length > 0 };
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  });

export const removeBg = createServerFn({ method: 'POST' })
  .middleware([requireAuth])
  // .inputValidator((data) => validateWithPretty(removeBgInputSchema, data))
  .handler(async ({ data, context }) => {
    // const { image } = data;
    // const { user } = context;
    try {
      // check if already used trial
      // const trial = await db
      //   .select()
      //   .from(bgRemoverTrials)
      //   .where(eq(bgRemoverTrials.userId, user.id))
      //   .limit(1);
      // if (trial.length > 0) {
      //   throw new Error('You have already used your trial');
      // }

      // TODO: Implement background removal logic

      // Mark trial as used
      //await db.insert(bgRemoverTrials).values({ userId: user.id });

      return { success: true };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
