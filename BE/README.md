# Go Prime Services API

This API receives the website's inquiry, callback, and document-booking forms, saves every request in PostgreSQL, then sends the details to the configured Gmail inbox.

## 1. Install backend packages

From the `BE` directory:

```powershell
npm install
```

## 2. Create the backend environment file

Copy `.env.example` to `.env` in the `BE` folder and replace every placeholder.

```env
# Local PostgreSQL example. The database name must remain goprimeservices.
DATABASE_URL=postgresql://postgres:YOUR_URL_ENCODED_PASSWORD@localhost:5432/goprimeservices

PORT=4000
FRONTEND_ORIGIN=http://localhost:3000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contactgoprimeservices@gmail.com
SMTP_APP_PASSWORD=YOUR_16_CHARACTER_GOOGLE_APP_PASSWORD
MAIL_FROM=Go Prime Services <contactgoprimeservices@gmail.com>
MAIL_TO=contactgoprimeservices@gmail.com
```

For a hosted PostgreSQL database, use the URL supplied by your provider and ensure its database component is `goprimeservices`, for example:

```env
DATABASE_URL=postgresql://USER:URL_ENCODED_PASSWORD@HOST:5432/goprimeservices?sslmode=require
```

Passwords in a URL must encode reserved characters: `@` is `%40`, `#` is `%23`, `/` is `%2F`, and `:` is `%3A`.

## 3. Configure Gmail SMTP

Turn on 2-Step Verification for `contactgoprimeservices@gmail.com`, then create a Google App Password. Put that generated 16-character password in `SMTP_APP_PASSWORD`; do not put your normal Google password in this file.

## 4. Create the database table

Run this once from `BE` after PostgreSQL is available:

```powershell
npm run db:migrate
```

## 5. Configure the frontend

Copy `.env.local.example` in the project root to `.env.local`, containing:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

For production, set it to the public HTTPS URL of this API, such as `https://api.example.com`. Update `FRONTEND_ORIGIN` in `BE/.env` to the public website URL as well. Multiple permitted frontend origins can be comma-separated.

## Running the API

After configuration, run this from `BE`:

```powershell
npm run dev
```

The health endpoint is `GET /health`. The API provides:

- `POST /api/v1/inquiries`
- `POST /api/v1/callback-requests`
- `POST /api/v1/document-bookings`

Each request is rate limited, validated, persisted in `leads`, and sent to `MAIL_TO`.
