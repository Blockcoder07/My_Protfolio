# 🚀 Deploy `StudentManagement` to MonsterASP.NET + Vercel — Step by Step

This guide deploys your **`Blockcoder07/StudentManagement`** repo as a live demo
on the **completely free** stack:

| Layer | Service | Free allowance |
|---|---|---|
| **.NET 9 API + SQL Server** | [MonsterASP.NET](https://www.monsterasp.net) | 1 GB disk, **100 MB MS SQL Server**, free SSL, custom subdomain |
| **Angular 21 SPA** | [Vercel](https://vercel.com) | Unlimited bandwidth, free SSL, GitHub auto-deploy |
| **CI/CD** | GitHub Actions (FTP deploy) | 2,000 min/month free for public repos |

End result: a public URL like `https://student-management-vishal.vercel.app`
that talks to `https://student-management-vishal.monsterasp.net/api`.

---

## 📋 Prerequisites

- [ ] You have access to your `Blockcoder07/StudentManagement` repo locally
- [ ] You have a GitHub account (you do — `Blockcoder07`)
- [ ] You'll create accounts on **MonsterASP.NET** and **Vercel** (free, no credit card)

---

## STEP 1 — Create your MonsterASP.NET hosting account & site (5 min)

1. Go to **https://www.monsterasp.net** and click **Free Hosting**
2. Sign up with email — confirm via email link
3. In the dashboard, click **Create New Site**:
   - **Site name:** `student-management-vishal` (or anything you like)
   - **Plan:** Free
   - You'll get a URL like `https://student-management-vishal.monsterasp.net`
4. In **Site → Settings**, confirm:
   - **.NET Framework:** **.NET 9** (or latest available — ASP.NET Core)
   - **Pipeline:** Integrated
   - **Default document:** automatic (handled by ASP.NET Core)
5. Note down your FTP credentials from **Site → File Manager → FTP Access**:
   - **FTP host** (e.g. `ftp.monsterasp.net` or your unique host)
   - **FTP username**
   - **FTP password**

> ⚠️ If your control panel doesn't yet list .NET 9, use .NET 8. Then in your
> StudentManagement `.csproj` files temporarily change
> `<TargetFramework>net9.0</TargetFramework>` → `<TargetFramework>net8.0</TargetFramework>`.

---

## STEP 2 — Create your free MS SQL Server database (3 min)

1. In the MonsterASP.NET dashboard → **MSSQL Databases** → **Create Database**
2. Fill in:
   - **Database name:** `StudentMgmtDb` (or similar)
   - **DB user:** auto-suggested or pick one
   - **Password:** generate a strong one (save it!)
3. Note the connection details shown:
   - **Server / host** (e.g. `mssql-211000.public.cloud.local`)
   - **Database name**
   - **User**
   - **Password**

Your connection string will look like:

```
Server=mssql-XXXXX.public.cloud.local;Database=StudentMgmtDb;User Id=YOUR_USER;Password=YOUR_PASSWORD;TrustServerCertificate=True;Encrypt=True;Connection Timeout=30
```

---

## STEP 3 — Apply the schema to the new database (3 min)

Your repo already has the migration script at `backend/scripts/InitialSchema.sql`.

**Option A — using `sqlcmd` (recommended):**

```bash
sqlcmd -S "mssql-XXXXX.public.cloud.local" \
       -d StudentMgmtDb \
       -U YOUR_USER \
       -P "YOUR_PASSWORD" \
       -i backend/scripts/InitialSchema.sql
```

**Option B — using SQL Server Management Studio (SSMS) or Azure Data Studio:**

1. Connect with the credentials above
2. Open `backend/scripts/InitialSchema.sql`
3. Press **Execute** (F5)

This creates the `Users` and `Students` tables. Your `DatabaseSeeder` will
auto-insert the admin (`admin` / `Admin@123`) on first API startup.

---

## STEP 4 — Copy deployment files into your StudentManagement repo (2 min)

From this portfolio repo's `deployment/student-management/` folder, copy these
into your **StudentManagement** repo at the matching paths:

```
StudentManagement/
├── backend/
│   ├── Dockerfile               ←  copy `Dockerfile`
│   └── .dockerignore            ←  copy `.dockerignore`
├── frontend/
│   ├── vercel.json              ←  copy `frontend-vercel.json` (rename to vercel.json)
│   └── src/environments/
│       └── environment.prod.ts  ←  copy `environment.prod.ts.template`
└── .github/workflows/
    └── deploy-api.yml           ←  copy `.github/workflows/deploy-api.yml`
```

### Update `Cors.AllowedOrigins` in your code

In `backend/src/StudentManagement.API/Program.cs`, make sure CORS reads from
config (it already does in your project) — **no code change needed**.

---

## STEP 5 — Add GitHub repository secrets (5 min)

In your `StudentManagement` repo on GitHub:

**Settings → Secrets and variables → Actions → New repository secret**

Add these secrets one by one:

| Secret name | Value |
|---|---|
| `MONSTERASP_FTP_SERVER` | Your FTP host from Step 1 (e.g. `ftp.monsterasp.net`) |
| `MONSTERASP_FTP_USER` | Your FTP username from Step 1 |
| `MONSTERASP_FTP_PASSWORD` | Your FTP password from Step 1 |
| `DB_CONNECTION` | Full SQL Server connection string from Step 2 |
| `JWT_KEY` | A fresh 64+ char base64 secret (see below ⬇️) |
| `ALLOWED_ORIGIN` | Your future Vercel URL, e.g. `https://student-management-vishal.vercel.app` |

### Generate a fresh JWT key

Run **once** in any terminal:

```bash
# Linux / macOS / Git Bash on Windows
openssl rand -base64 64

# OR PowerShell
[Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(64))
```

Copy the output (one long string) and paste it as the `JWT_KEY` secret.
**Never reuse the dev key from `appsettings.json`.**

---

## STEP 6 — Push to main and watch the deploy (2 min)

```bash
cd /path/to/StudentManagement
git add .
git commit -m "feat: add Dockerfile, GitHub Actions FTP deploy, prod env"
git push origin main
```

Then go to your repo → **Actions** tab. You'll see **Deploy API to MonsterASP.NET**
running. It will:

1. ✅ Restore + build + publish your .NET 9 API
2. ✅ Inject `appsettings.Production.json` from your secrets
3. ✅ FTP-deploy the `publish/` output to MonsterASP.NET

When it goes green, test it:

```
https://student-management-vishal.monsterasp.net/swagger
```

You should see **Swagger UI**. Try `POST /api/auth/login` with
`{ "username": "admin", "password": "Admin@123" }` — if you get a JWT back,
your API is live. 🎉

> 💡 **First request might take 20–30 seconds** as MonsterASP.NET cold-starts
> the .NET process. Subsequent requests are fast.

---

## STEP 7 — Deploy the Angular frontend to Vercel (5 min)

1. Go to **https://vercel.com** and sign in with **GitHub**
2. Click **Add New → Project**
3. Pick the **`StudentManagement`** repo
4. **Configure Project:**
   - **Framework Preset:** Other (Vercel will auto-detect Angular CLI)
   - **Root Directory:** click **Edit** → set to `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/frontend/browser`
     *(adjust to match your real Angular project name in `angular.json` —
     check `outputPath` there. For Angular 17+ it's usually `dist/<name>/browser`.)*
5. **Environment Variables** — none required (the API URL is baked into
   `environment.prod.ts`)
6. Click **Deploy**

Within ~2 minutes you'll get:

```
https://student-management-vishal.vercel.app
```

Vercel will auto-redeploy on every push to `main` going forward.

---

## STEP 8 — Wire it back to your portfolio (1 min)

Open this portfolio repo and update `lib/data/projects.ts`:

```ts
{
  id: "student-management-system",
  // ...
  github: "https://github.com/Blockcoder07/StudentManagement",
  demo: "https://student-management-vishal.vercel.app",   // ← your live URL
},
```

Push to GitHub → Vercel auto-redeploys your portfolio → the **Live Demo**
button now opens your real running app. ✨

---

## 🧪 Smoke tests (do these once after first deploy)

- [ ] Open `https://your-site.monsterasp.net/swagger` → Swagger UI loads
- [ ] `POST /api/auth/login` → returns a JWT
- [ ] Open `https://student-management-vishal.vercel.app` → login screen renders
- [ ] Login with `admin` / `Admin@123` → dashboard loads, students list renders
- [ ] Create a new student → row appears with no errors
- [ ] Open browser DevTools → Network → confirm requests go to
      `https://your-site.monsterasp.net/api/...` and return 200

---

## 🐛 Troubleshooting

| Symptom | Fix |
|---|---|
| `500.30 - ASP.NET Core app failed to start` | Check FTP-uploaded files include `web.config` (auto-generated on publish). Confirm your MonsterASP.NET site is set to **.NET Core / .NET 9** runtime, not Classic ASP.NET. |
| `Unable to connect to SQL Server` | Re-check `DB_CONNECTION` secret. Add `TrustServerCertificate=True;Encrypt=True`. Re-run Step 3 to verify schema is in place. |
| `CORS error` in browser | Make sure `ALLOWED_ORIGIN` secret exactly matches your Vercel URL (including `https://`, no trailing slash). Redeploy. |
| `401 Unauthorized` on login | The seeded admin only seeds when `Users` table is empty. Either drop & re-create the DB, or insert the admin row manually using `PasswordHasher`. |
| Vercel build fails on Angular | Check `outputDirectory` matches what `angular.json` says under `architect.build.options.outputPath`. For Angular 17+ that's `dist/<project-name>/browser`. |
| GitHub Action FTP deploy hangs | MonsterASP.NET sometimes throttles. Re-run the workflow. If it persists, switch to `protocol: ftps` in the action and add `port: 21`. |

---

## 🔄 Switching to Fly.io / Render later (optional)

The `Dockerfile` in `backend/Dockerfile` is already production-ready for
container hosts:

**Fly.io (3 free shared VMs):**
```bash
cd backend
fly launch --dockerfile Dockerfile --no-deploy
fly secrets set ConnectionStrings__Default="..." Jwt__Key="..."
fly deploy
```

**Render.com (free Docker web service):**
1. New → Web Service → connect repo
2. Root directory: `backend`
3. Environment: Docker
4. Add the same env vars (`ConnectionStrings__Default`, `Jwt__Key`, etc.)

---

Done — **happy shipping!** 🚢

Once your live demo is up, ping me and I'll update the portfolio's
project card with the real URL and a small **"Live"** pulse badge.
