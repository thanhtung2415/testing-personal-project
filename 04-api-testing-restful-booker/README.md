# 04 - API Testing - Restful-Booker

Selected API from list 19-24: **Restful-Booker**  
Base URL: `https://restful-booker.herokuapp.com`

## Why This API Was Selected

Restful-Booker is a good API testing target because it supports:

- Health check
- Authentication token
- Create booking
- Get booking
- Update booking
- Delete booking
- Data validation and status code validation

## Tools

- Postman collection
- Newman CLI
- GitHub Actions

## How to Run

From repository root:

```bash
npm install
npm run test:api
```

The Newman JSON report is generated at:

```text
04-api-testing-restful-booker/postman/newman-report.json
```

## Test Flow

1. Ping API health check.
2. Create auth token.
3. Create a booking.
4. Get the created booking.
5. Update the booking.
6. Delete the booking.
7. Verify deleted booking cannot be retrieved.

## API Test Cases

| TC ID | Endpoint | Method | Expected Result |
| --- | --- | --- | --- |
| API-001 | `/ping` | GET | API returns successful health response |
| API-002 | `/auth` | POST | Token is created |
| API-003 | `/booking` | POST | Booking is created and booking id is saved |
| API-004 | `/booking/{id}` | GET | Created booking details are returned |
| API-005 | `/booking/{id}` | PUT | Booking information is updated |
| API-006 | `/booking/{id}` | DELETE | Booking is deleted |
| API-007 | `/booking/{id}` | GET | Deleted booking returns not found |

