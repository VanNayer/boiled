CREATE TABLE "epics" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(60), "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "user_id" integer);
CREATE UNIQUE INDEX "index_epics_on_name" ON "epics" ("name");
CREATE INDEX "index_epics_on_user_id" ON "epics" ("user_id");
CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar DEFAULT '' NOT NULL, "encrypted_password" varchar DEFAULT '' NOT NULL, "reset_password_token" varchar, "reset_password_sent_at" datetime, "remember_created_at" datetime, "sign_in_count" integer DEFAULT 0 NOT NULL, "current_sign_in_at" datetime, "last_sign_in_at" datetime, "current_sign_in_ip" varchar, "last_sign_in_ip" varchar, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
CREATE UNIQUE INDEX "index_users_on_email" ON "users" ("email");
CREATE UNIQUE INDEX "index_users_on_reset_password_token" ON "users" ("reset_password_token");
CREATE TABLE "votes" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "epic_id" integer, "user_id" integer);
CREATE INDEX "index_votes_on_epic_id" ON "votes" ("epic_id");
CREATE INDEX "index_votes_on_user_id" ON "votes" ("user_id");
CREATE TABLE "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY);
CREATE TABLE "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
INSERT INTO schema_migrations (version) VALUES
('20170213115845'),
('20170213225519'),
('20170221192925'),
('20170302080000');


