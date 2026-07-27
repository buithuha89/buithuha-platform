-- ============================================================
-- FIX: blog_posts — add columns required by /api/blog
--
-- BUG: src/app/api/blog/route.ts always writes body, focus_keyword,
-- author_name and author_avatar when creating/updating a post, but
-- these columns were never defined in schema.sql nor any migration.
-- Result: every blog post insert fails with a DB error (HTTP 500),
-- so the blog editor has never been able to publish a single post.
--
-- This migration adds the 4 missing columns. Idempotent & safe to
-- re-run (ADD COLUMN IF NOT EXISTS).
-- ============================================================

ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS body          text,
  ADD COLUMN IF NOT EXISTS focus_keyword text,
  ADD COLUMN IF NOT EXISTS author_name   text,
  ADD COLUMN IF NOT EXISTS author_avatar text;
