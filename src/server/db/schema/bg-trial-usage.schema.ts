import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { users } from './auth.schema';

export const bgRemoverTrials = pgTable(
  'bg_remover_trials',
  {
    id: text('id')
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text('user_id')
      .references(() => users.id)
      .notNull(),
    usedAt: timestamp('used_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('bg_remover_trials_user_id_idx').on(table.userId)]
);

export const bgRemoverTrialsRelations = relations(
  bgRemoverTrials,
  ({ one }) => ({
    user: one(users, {
      fields: [bgRemoverTrials.userId],
      references: [users.id],
    }),
  })
);

export const bgRemoverTrialSchema = createSelectSchema(bgRemoverTrials);
export const insertBgRemoverTrialSchema = createInsertSchema(
  bgRemoverTrials
).omit({
  id: true,
  usedAt: true,
});

export type BgRemoverTrial = z.infer<typeof bgRemoverTrialSchema>;
export type InsertBgRemoverTrial = z.infer<typeof insertBgRemoverTrialSchema>;
