## Run Guide (Windows)

This project is a FastAPI backend that loads ML models from `.pkl` files and serves prediction endpoints. Follow these Windows-friendly steps.

### 1) Prerequisites
- Python 3.8+ installed (`py -V` to check)
- PowerShell or Command Prompt

### 2) Open a terminal in the project root
Project root: `C:\Users\atharva\ml_cogni`

### 3) Create and activate a virtual environment (Windows)
```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
```

If PowerShell blocks the activation script, run PowerShell as Administrator and allow scripts temporarily:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 4) Install dependencies
Dependencies are listed under `backend/Requirements.txt`.
```powershell
cd backend
py -m pip install --upgrade pip
py -m pip install -r Requirements.txt
```

Note: `psycopg2` is included for optional Postgres support. If it fails on Windows and you don't need Postgres, you can skip it by installing the rest first, or install `psycopg2-binary`:
```powershell
py -m pip install psycopg2-binary
```

### 5) Create a .env file (required)
The server expects a `.env` file in `backend/`. For local SQLite (recommended), create `backend/.env` with:
```ini
DATABASE_URL=sqlite:///cibil_database.db
```

For Postgres (optional), use:
```ini
DATABASE_URL=postgresql://username:password@localhost:5432/cibil_db
```

### 6) Verify everything with the test script (recommended)
```powershell
py test_app.py
```

### 7) Start the server
Option A (auto-checks files/deps then starts):
```powershell
py start_server.py
```

Option B (run FastAPI app directly with reload):
```powershell
py main.py
```

The API will be available at:
- http://localhost:8000
- Docs (Swagger): http://localhost:8000/docs
- Redoc: http://localhost:8000/redoc

### 8) Quick endpoint tests
Health check (PowerShell):
```powershell
Invoke-WebRequest http://localhost:8000/health | Select-Object -ExpandProperty Content
```

Sample `POST /predict` body (adjust values to match your encoders and CIBIL IDs present in `cibil_database.csv`):
```json
{
  "age": 30,
  "gender": "Male",
  "marital_status": "Single",
  "property_type": "Owned",
  "education": "Graduate",
  "employment": "Salaried",
  "experience": 6,
  "salary": 50000,
  "cibil_id": "ID_001"
}
```

PowerShell example:
```powershell
$body = '{
  "age": 30,
  "gender": "Male",
  "marital_status": "Single",
  "property_type": "Owned",
  "education": "Graduate",
  "employment": "Salaried",
  "experience": 6,
  "salary": 50000,
  "cibil_id": "ID_001"
}'
Invoke-WebRequest -Uri http://localhost:8000/predict -Method POST -Body $body -ContentType 'application/json' | Select-Object -ExpandProperty Content
```

EMI calculator:
```powershell
$emi = '{
  "loan_amount": 500000,
  "interest_rate": 10.5,
  "tenure_months": 60,
  "monthly_income": 60000
}'
Invoke-WebRequest -Uri http://localhost:8000/calculate-emi -Method POST -Body $emi -ContentType 'application/json' | Select-Object -ExpandProperty Content
```

### 9) Notes for Windows users
- Use `py` instead of `python3`.
- Model and CSV files must remain in `backend/` alongside `main.py`.
- If port 8000 is in use, set a different port before running:
```powershell
$env:PORT = "8080"
py main.py
```

### Common issues
- Missing `.pkl`/CSV files: ensure all files listed in `backend/README_SETUP.md` are present in `backend/`.
- `psycopg2` build error: install `psycopg2-binary` or stick to SQLite.
- Activation policy error: run the `Set-ExecutionPolicy` command shown above.

### macOS/Linux
If you need macOS/Linux steps, see `backend/README_SETUP.md` for commands using `python3` and `pip3`.

## 🐳 Docker Alternative (Recommended)

### Quick Docker Setup
```powershell
# Build and run both services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
```

### Individual Docker Commands
```powershell
# Backend only
docker build -t ml-cogni-backend ./backend
docker run -p 8000:8000 ml-cogni-backend

# Frontend only  
docker build -t ml-cogni-frontend ./frontend
docker run -p 3000:3000 ml-cogni-frontend
```

### Test Connection
Run the connection test script:
```powershell
.\test-connection.ps1
```
## Files Required

The following files must be present:
- `main.py` - Main FastAPI application
- `Database.py` - Database module
- `ml.py` - Machine learning module
- `.env` - Environment configuration
- `Requirements.txt` - Python dependencies
- `cibil_database.csv` - CIBIL score data
- `merged_training_dataset.csv` - Training data
- **Model files (.pkl)**:
  - `eligibility_model.pkl`
  - `product_model.pkl`
  - `amount_model.pkl`
  - `tenure_model.pkl`
  - `rate_model.pkl`
  - `label_encoders.pkl`

