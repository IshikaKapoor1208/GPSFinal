/**
 * Integration Test Script for Go Prime Services API
 * 
 * Verifies all API endpoints (Direct Backend & Next.js Proxy)
 * Usage:
 *   cd BE
 *   npm run test:integration
 */

const BACKEND_BASE = process.env.BACKEND_API_URL || "http://127.0.0.1:4000";
const FRONTEND_BASE = process.env.FRONTEND_API_URL || "http://localhost:3000";

interface TestResult {
  name: string;
  endpoint: string;
  passed: boolean;
  status?: number;
  message?: string;
  durationMs: number;
}

const results: TestResult[] = [];

async function runTest(
  name: string,
  url: string,
  options: {
    method: string;
    body?: Record<string, unknown>;
    expectedStatus: number;
  }
) {
  const start = Date.now();
  try {
    const response = await fetch(url, {
      method: options.method,
      headers: { "Content-Type": "application/json" },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: AbortSignal.timeout(8000),
    });

    const durationMs = Date.now() - start;
    const data = await response.json().catch(() => ({}));
    const passed = response.status === options.expectedStatus;

    results.push({
      name,
      endpoint: url,
      passed,
      status: response.status,
      message: passed
        ? "Success"
        : `Expected ${options.expectedStatus}, got ${response.status}: ${JSON.stringify(data)}`,
      durationMs,
    });
  } catch (error) {
    const durationMs = Date.now() - start;
    results.push({
      name,
      endpoint: url,
      passed: false,
      message: error instanceof Error ? error.message : "Connection failed",
      durationMs,
    });
  }
}

async function main() {
  console.log("\n=======================================================");
  console.log("  Go Prime Services - API Integration Test Suite");
  console.log("=======================================================\n");
  console.log(`Backend Target:  ${BACKEND_BASE}`);
  console.log(`Frontend Target: ${FRONTEND_BASE}\n`);

  console.log("Running Backend Direct Tests...");

  // 1. Health Check
  await runTest("Backend Health Check", `${BACKEND_BASE}/health`, {
    method: "GET",
    expectedStatus: 200,
  });

  // 2. Inquiries - Valid Submission
  await runTest(
    "POST /api/v1/inquiries (Valid Submission)",
    `${BACKEND_BASE}/api/v1/inquiries`,
    {
      method: "POST",
      body: {
        name: "Test User",
        phone: "9876543210",
        email: "test.lead@goprimeservices.com",
        service: "Registered Rent Agreement",
        preferredSlot: "Morning (10:00 AM - 1:00 PM)",
        message: "Automated Integration Test",
      },
      expectedStatus: 201,
    }
  );

  // 3. Inquiries - Validation Check (Invalid Phone)
  await runTest(
    "POST /api/v1/inquiries (Validation Rejection)",
    `${BACKEND_BASE}/api/v1/inquiries`,
    {
      method: "POST",
      body: {
        name: "Test User",
        phone: "123", // invalid length
        service: "Registered Rent Agreement",
      },
      expectedStatus: 400,
    }
  );

  // 4. Callback Requests - Valid Submission
  await runTest(
    "POST /api/v1/callback-requests (Valid)",
    `${BACKEND_BASE}/api/v1/callback-requests`,
    {
      method: "POST",
      body: {
        name: "Test User Callback",
        phone: "9876543210",
        service: "Partnership Deed Registration",
        preferredTime: "Next 15 minutes",
        notes: "Automated Callback Test",
      },
      expectedStatus: 201,
    }
  );

  // 5. Document Bookings - Valid Submission
  await runTest(
    "POST /api/v1/document-bookings (Valid)",
    `${BACKEND_BASE}/api/v1/document-bookings`,
    {
      method: "POST",
      body: {
        serviceType: "Registered Rent Agreement",
        city: "Maharashtra",
        locality: "Pune",
        landlordName: "Test Landlord",
        tenantName: "Test Tenant",
        phone: "9876543210",
        email: "test.booking@goprimeservices.com",
        monthlyRent: "25000",
        securityDeposit: "100000",
        tenureMonths: "11",
        verificationMode: "Doorstep Biometric (UIDAI)",
      },
      expectedStatus: 201,
    }
  );

  // 6. Next.js Frontend Proxy Check (if running)
  console.log("\nChecking Next.js Frontend Proxy (port 3000)...");
  await runTest(
    "Next.js Proxy: POST /api/v1/inquiries",
    `${FRONTEND_BASE}/api/v1/inquiries`,
    {
      method: "POST",
      body: {
        name: "Frontend Proxy Test User",
        phone: "9876543210",
        email: "test.proxy@goprimeservices.com",
        service: "Registered Rent Agreement",
        preferredSlot: "Morning (10:00 AM - 1:00 PM)",
        message: "Proxy Verification",
      },
      expectedStatus: 201,
    }
  );

  // Print Summary
  console.log("\n=======================================================");
  console.log("  Test Results Summary");
  console.log("=======================================================\n");

  let totalPassed = 0;
  for (const res of results) {
    const icon = res.passed ? " [PASS] " : " [FAIL] ";
    console.log(`${icon} ${res.name} (${res.durationMs}ms)`);
    if (!res.passed) {
      console.log(`         Error: ${res.message}`);
    } else {
      totalPassed++;
    }
  }

  console.log(`\nTotal: ${results.length} tests | Passed: ${totalPassed} | Failed: ${results.length - totalPassed}`);
  console.log("=======================================================\n");
}

main().catch(console.error);
