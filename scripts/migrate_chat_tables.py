import psycopg2

DATABASE_URL = "postgresql://postgres:postgres_secure_pass@localhost:5432/interact_db"

def run_migration():
    print("Connecting to interact_db...")
    conn = psycopg2.connect(DATABASE_URL)
    conn.autocommit = True
    cur = conn.cursor()

    print("Creating ENUMs if not exist...")
    cur.execute("""
    DO $$ BEGIN
        CREATE TYPE "ConversationType" AS ENUM ('DIRECT', 'GROUP');
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;
    """)

    cur.execute("""
    DO $$ BEGIN
        CREATE TYPE "MessageType" AS ENUM ('TEXT', 'IMAGE', 'VIDEO', 'FILE', 'SYSTEM');
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;
    """)

    cur.execute("""
    DO $$ BEGIN
        CREATE TYPE "MessageStatus" AS ENUM ('SENT', 'DELIVERED', 'READ');
    EXCEPTION
        WHEN duplicate_object THEN null;
    END $$;
    """)

    print("Creating tables...")
    cur.execute("""
    CREATE TABLE IF NOT EXISTS conversations (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        type "ConversationType" NOT NULL DEFAULT 'DIRECT',
        title TEXT,
        avatar TEXT,
        "lastMessageText" TEXT,
        "lastMessageAt" TIMESTAMP WITH TIME ZONE,
        "lastSenderId" TEXT,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS conversation_members (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "conversationId" UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
        "userId" TEXT NOT NULL,
        "joinedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        "lastReadAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        "isArchived" BOOLEAN NOT NULL DEFAULT FALSE,
        "isMuted" BOOLEAN NOT NULL DEFAULT FALSE,
        CONSTRAINT uq_conversation_member UNIQUE ("conversationId", "userId")
    );
    """)

    cur.execute("""
    CREATE INDEX IF NOT EXISTS idx_conversation_members_user ON conversation_members("userId");
    CREATE INDEX IF NOT EXISTS idx_conversation_members_conv ON conversation_members("conversationId");
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS messages (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "conversationId" UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
        "senderId" TEXT NOT NULL,
        "clientMessageId" TEXT,
        content TEXT NOT NULL,
        type "MessageType" NOT NULL DEFAULT 'TEXT',
        status "MessageStatus" NOT NULL DEFAULT 'SENT',
        "replyToMessageId" UUID,
        "recalledAt" TIMESTAMP WITH TIME ZONE,
        "deletedForUserIds" TEXT[] NOT NULL DEFAULT '{}',
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );
    """)

    cur.execute("""
    CREATE INDEX IF NOT EXISTS idx_messages_conv_created ON messages("conversationId", "createdAt" DESC);
    CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages("senderId");
    CREATE INDEX IF NOT EXISTS idx_messages_client_id ON messages("clientMessageId");
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS message_attachments (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "messageId" UUID NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
        "fileName" TEXT NOT NULL,
        "fileKey" TEXT,
        "mimeType" TEXT NOT NULL,
        size INTEGER NOT NULL,
        url TEXT NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );
    """)

    cur.execute("""
    CREATE INDEX IF NOT EXISTS idx_message_attachments_msg ON message_attachments("messageId");
    """)

    print("Checking created tables...")
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
    tables = [row[0] for row in cur.fetchall()]
    print("Tables in interact_db:", tables)

    cur.close()
    conn.close()
    print("Migration finished successfully!")

if __name__ == "__main__":
    run_migration()
