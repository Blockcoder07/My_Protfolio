# 🚀 Deployment Templates

This folder contains **ready-to-copy deployment artifacts** for Vishal's
portfolio projects. They live here so you have one place to find them; copy
each file into the matching project repo at the path shown.

## `student-management/`

Deploys **`Blockcoder07/StudentManagement`** to:
- **MonsterASP.NET** (free .NET hosting + 100 MB SQL Server)
- **Vercel** (free Angular hosting)
- **GitHub Actions** (auto FTP deploy on push to main)

| File in this folder | Goes to (in StudentManagement repo) |
|---|---|
| `Dockerfile` | `backend/Dockerfile` |
| `.dockerignore` | `backend/.dockerignore` |
| `.github/workflows/deploy-api.yml` | `.github/workflows/deploy-api.yml` |
| `frontend-vercel.json` | `frontend/vercel.json` *(rename)* |
| `environment.prod.ts.template` | `frontend/src/environments/environment.prod.ts` *(rename, edit URL)* |
| `appsettings.Production.json.template` | reference only — values go into GitHub Secrets |
| `DEPLOY_GUIDE.md` | **read this start to finish** |

👉 **Start with `student-management/DEPLOY_GUIDE.md`** — it's a complete
step-by-step walkthrough (8 steps, ~25 min total).

---

## What about `Clinik_ManageMent` and `BankstatementApi`?

Once you've shipped the Student Management demo, the same patterns apply to
your other two repos. Just say the word and I'll generate matching
`deployment/clinic-management/` and `deployment/bank-statement-api/` folders
with the right project paths and CSPROJ names.
