-- Initialize separate databases for each microservice boundary
CREATE DATABASE auth_db;
CREATE DATABASE user_db;
CREATE DATABASE social_db;
CREATE DATABASE post_db;
CREATE DATABASE interact_db;
CREATE DATABASE feed_db;
CREATE DATABASE media_db;
CREATE DATABASE reels_db;
CREATE DATABASE notif_db;
CREATE DATABASE search_db;

-- Grant privileges to the default user
GRANT ALL PRIVILEGES ON DATABASE auth_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE user_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE social_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE post_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE interact_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE feed_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE media_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE reels_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE notif_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE search_db TO postgres;
