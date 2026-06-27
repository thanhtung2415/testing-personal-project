# 03 - SwagStore CI/CD

This assignment demonstrates:

- Existing ecommerce-style codebase
- Added application code
- Jest automated tests
- GitHub Actions CI
- Render/Railway deployment configuration
- Auto deployment after push to `main`

## Local Run

From repository root:

```bash
npm install
npm run start:swagstore
```

Open:

```text
http://localhost:3000
```

## Run Tests

```bash
npm run test:swagstore
```

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| GET | `/api/products` | Product list |
| POST | `/api/cart` | Calculate cart total |
| POST | `/api/orders` | Create order |

## Deployment

Render:

- Build command: `npm install`
- Start command: `npm run start:swagstore`
- Auto deploy: enabled from `main`

Railway:

- Start command: `npm run start:swagstore`
- Auto deploy: enabled from GitHub

## Evidence to Attach

- Screenshot of successful GitHub Actions run
- Deployment URL
- Screenshot of deployed app homepage
- Screenshot of deployed `/api/health`

