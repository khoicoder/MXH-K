# -*- coding: utf-8 -*-
import psycopg2

def migrate():
    conn = psycopg2.connect("postgresql://postgres:postgres_secure_pass@localhost:5432/post_db")
    cur = conn.cursor()

    # 1. Enums
    cur.execute("""
    DO $$ BEGIN
        CREATE TYPE "StoryType" AS ENUM ('IMAGE', 'VIDEO', 'TEXT');
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;
    """)

    cur.execute("""
    DO $$ BEGIN
        CREATE TYPE "StoryVisibility" AS ENUM ('PUBLIC', 'FRIENDS', 'FRIENDS_EXCEPT', 'CLOSE_FRIENDS', 'ONLY_ME', 'CUSTOM');
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;
    """)

    # 2. Stories table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS "stories" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "authorId" TEXT NOT NULL,
        "type" "StoryType" NOT NULL DEFAULT 'IMAGE',
        "content" TEXT,
        "backgroundColor" TEXT,
        "fontStyle" TEXT,
        "visibility" "StoryVisibility" NOT NULL DEFAULT 'PUBLIC',
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "expiresAt" TIMESTAMP(3) NOT NULL,
        "deletedAt" TIMESTAMP(3)
    );
    CREATE INDEX IF NOT EXISTS "stories_authorId_createdAt_idx" ON "stories" ("authorId", "createdAt" DESC);
    CREATE INDEX IF NOT EXISTS "stories_expiresAt_idx" ON "stories" ("expiresAt");
    CREATE INDEX IF NOT EXISTS "stories_deletedAt_idx" ON "stories" ("deletedAt");
    """)

    # 3. Story media table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS "story_media" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "storyId" TEXT NOT NULL REFERENCES "stories"("id") ON DELETE CASCADE,
        "mediaType" TEXT NOT NULL,
        "url" TEXT NOT NULL,
        "mimeType" TEXT,
        "fileSize" INTEGER,
        "duration" DOUBLE PRECISION,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS "story_media_storyId_idx" ON "story_media" ("storyId");
    """)

    # 4. Story views table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS "story_views" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "storyId" TEXT NOT NULL REFERENCES "stories"("id") ON DELETE CASCADE,
        "viewerId" TEXT NOT NULL,
        "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "story_views_storyId_viewerId_key" UNIQUE ("storyId", "viewerId")
    );
    CREATE INDEX IF NOT EXISTS "story_views_storyId_viewedAt_idx" ON "story_views" ("storyId", "viewedAt" DESC);
    CREATE INDEX IF NOT EXISTS "story_views_viewerId_idx" ON "story_views" ("viewerId");
    """)

    # 5. Story reactions table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS "story_reactions" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "storyId" TEXT NOT NULL REFERENCES "stories"("id") ON DELETE CASCADE,
        "userId" TEXT NOT NULL,
        "reactionType" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "story_reactions_storyId_userId_key" UNIQUE ("storyId", "userId")
    );
    CREATE INDEX IF NOT EXISTS "story_reactions_storyId_idx" ON "story_reactions" ("storyId");
    """)

    # 6. Story audiences table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS "story_audiences" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "storyId" TEXT NOT NULL REFERENCES "stories"("id") ON DELETE CASCADE,
        "userId" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "story_audiences_storyId_userId_type_key" UNIQUE ("storyId", "userId", "type")
    );
    CREATE INDEX IF NOT EXISTS "story_audiences_storyId_idx" ON "story_audiences" ("storyId");
    CREATE INDEX IF NOT EXISTS "story_audiences_userId_idx" ON "story_audiences" ("userId");
    """)

    # 7. Close friends table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS "close_friends" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "userId" TEXT NOT NULL,
        "friendId" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "close_friends_userId_friendId_key" UNIQUE ("userId", "friendId")
    );
    CREATE INDEX IF NOT EXISTS "close_friends_userId_idx" ON "close_friends" ("userId");
    """)

    conn.commit()
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public';")
    tables = [r[0] for r in cur.fetchall()]
    print("Updated post_db tables:", tables)
    conn.close()

if __name__ == "__main__":
    migrate()
