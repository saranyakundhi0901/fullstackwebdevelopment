# Q8: Student Management System, "adds records but does not display updated records"

Roll no: A24126552090 | Question: Q8 | Marks: 10 | Bloom's level: L4 Analyse | CO assessed: CO5

## 1. CO-PO / PSO mapping (CO5 approved matrix)

| CO  | PO1 | PO2 | PO3 | PO4 | PO5 | PO6 | PO7 | PO8 | PO9 | PO10 | PO11 | PO12 | PSO1 | PSO2 |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|------|------|------|------|
| CO5 | 2   | 2   | 2   | 2   | 3   | –   | –   | –   | 2   | 1    | 2    | 2    | 2    | –    |

Q8 assesses CO5 only. PO correlations are inherited from the approved CO5 row, not newly assigned.

## 2. Project structure

```
sms/
  backend/   Express + Mongoose API (deploy on Render)
  frontend/  React + Vite UI (deploy on Vercel)
```

## 3. Run locally

```bash
# Backend
cd backend
npm install
cp .env.example .env      # fill MONGO_URI
npm run dev               # http://localhost:5000/api/health

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env
npm run dev               # http://localhost:5173
```

## 4. MongoDB Atlas setup

1. Create a free cluster, then Database Access: add a user with a password.
2. Network Access: add `0.0.0.0/0` (needed for Render's changing IPs).
3. Connect, Drivers: copy the connection string, put the DB name `studentdb` before `?`.
4. The collection `students` is created automatically on the first insert.

## 5. Deployment sequence

1. **Atlas**: cluster, user, network access, connection string.
2. **Render (backend)**: push `backend/` to GitHub, New Web Service.
   - Build command: `npm install`  | Start command: `npm start`
   - Env vars: `MONGO_URI`, `CLIENT_URL` (set after Vercel URL is known)
3. **Vercel (frontend)**: import `frontend/`, framework Vite.
   - Env var: `VITE_API_URL=https://<render-service>.onrender.com/api`
4. Go back to Render, set `CLIENT_URL=https://<your-app>.vercel.app`, redeploy.
5. Redeploy Vercel whenever an env var changes (Vite reads it at build time).

## 6. The Q8 problem: how the bug appears

Typical broken versions of this app (what you analyse in the answer):

| Layer | Faulty code | Symptom | Fix (already in this project) |
|-------|-------------|---------|--------------------------------|
| Frontend | After POST, no re-fetch; `useEffect(..., [])` runs once | Record saved in Atlas, UI unchanged until refresh | `await loadStudents()` after add/update/delete |
| Frontend | `VITE_API_URL` missing or pointing to localhost on Vercel | GET fails or hits wrong server | Set env var on Vercel, redeploy |
| Backend | `Student.findByIdAndUpdate(id, body)` without `{ new: true }` | PUT response shows old data | Add `{ new: true }` |
| Backend | `Student.create(...)` or `save()` not awaited | Response sent before write finishes | `await` every DB call |
| Backend | GET response cached (304) | List looks stale | `Cache-Control: no-store` + cache-buster param |
| Database | Wrong DB name or collection in `MONGO_URI` / model | Data saved where GET does not read | Explicit collection name; check `/api/health` |
| Database | `_id` passed as wrong type, no match | Update changes nothing | Validate id with `ObjectId.isValid` |
| Deployment | CORS blocks frontend origin | Console CORS error | `CLIENT_URL` env var = exact Vercel URL |
| Deployment | Render free tier asleep | First request slow or times out | Wait ~50 s, retry; use a health ping |

## 7. Systematic debugging procedure

1. Reproduce: add a student, then reload. Does it appear after reload?
2. Browser DevTools, Network tab: check URL, status code and response body of POST and GET.
3. Call the API directly (Postman or curl) to separate frontend from backend.
4. Check Render logs for `[POST]`, `[GET]` lines and DB errors.
5. Open Atlas, Browse Collections: is the document in `studentdb.students`?
6. Compare env vars on Render and Vercel with `.env.example`; redeploy after changes.
7. Review the GET controller, the model, and the React state/effect code.
8. Fix, redeploy, rerun the test cases below.

Isolation rule:
- In Atlas and in the GET API, but not in the UI: frontend bug.
- In Atlas, but GET API does not return it: backend query or route bug.
- Not in Atlas: wrong connection string, DB or collection.

## 8. Test cases

Replace `API` with `https://<service>.onrender.com/api`.

| ID | Test | Command / action | Expected |
|----|------|------------------|----------|
| T1 | Health | `curl API/health` | `status: ok`, `dbState: connected`, `dbName: studentdb` |
| T2 | Add | `curl -X POST API/students -H "Content-Type: application/json" -d '{"name":"Ram","rollNo":"A24126552090","department":"CSE AI&ML"}'` | 201 + document with `_id` |
| T3 | List | `curl API/students` | Array contains the new student |
| T4 | Update | `curl -X PUT API/students/<id> -H "Content-Type: application/json" -d '{"department":"CSE"}'` | 200 + document with department `CSE` |
| T5 | List again | `curl API/students` | Shows updated department |
| T6 | UI refresh | Add/Edit in the UI | Table updates without page reload |
| T7 | Duplicate roll no | Repeat T2 | 409 error |
| T8 | Delete | `curl -X DELETE API/students/<id>` | 200, record gone from T3 |
| T9 | CORS | Open the Vercel site, check the console | No CORS error |

## 9. Evidence to attach (screenshots)

- Atlas cluster and `students` collection with a document
- Render deploy log and live service URL
- Vercel deployment and live URL
- Network tab showing POST 201 and GET 200
- Postman or curl results for T1 to T8
- UI showing the updated record after edit

## 10. Mapping to the rubric

| Rubric component | Where it is covered |
|------------------|---------------------|
| Problem understanding and system design | Sections 2, 6 |
| MongoDB database design | `models/Student.js`, Section 4 |
| CRUD operations | `routes/students.js` |
| React frontend | `frontend/src/App.jsx` |
| Express.js backend | `server.js`, `routes/students.js` |
| Cloud deployment | Sections 4, 5 |
| Testing, documentation, demonstration | Sections 7, 8, 9 |
