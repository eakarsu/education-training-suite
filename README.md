# Education Training Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIEducationSuite`
- `AiPersonalizedTutor`
- `AIMultiAgentClassroom`
- `AILanguageLearningCompanion`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/education-training-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4100`

Seeded users:
- `admin@education-training.local / admin123`
- `manager@education-training.local / manager123`
- `analyst@education-training.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/education-training-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4100 npm run smoke
```
