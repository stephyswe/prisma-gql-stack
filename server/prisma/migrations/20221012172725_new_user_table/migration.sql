-- CreateTable
CREATE TABLE "BetaUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "acceptTermsAndConditions" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BetaUser_email_key" ON "BetaUser"("email");
