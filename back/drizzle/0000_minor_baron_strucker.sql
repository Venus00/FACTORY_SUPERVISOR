CREATE TABLE IF NOT EXISTS "sensors" (
	"serial" text PRIMARY KEY NOT NULL,
	"stauts" text,
	"result_test" text,
	"firmware_version" text,
	CONSTRAINT "sensors_serial_unique" UNIQUE("serial")
);
