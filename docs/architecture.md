# TestBoard - Architecture

## Stack
- Next.js (App Router)
- Vercel (hosting)
- PostgreSQL (Railway)
- Prisma (ORM)
- Auth.js (authentication)

## High Level Architecture

User → Next.js (Vercel) → Prisma → PostgreSQL (Railway)

## Main Modules

- Auth (login)
- Dashboard
- Test Cases
- Distributions
- Test Executions
- Issues

## Initial Data Model

### User
- id
- name
- email
- passwordHash
- role (ADMIN | TESTER)

### Distribution
- id
- name
- version
- createdAt

### TestCase
- id
- title
- description
- expectedResult
- priority

### Issue
- id
- title
- description
- status
- severity

### TestExecution
- id
- distributionId
- testCaseId
- testerId
- status (PASS | FAIL | BLOCKED | NOT_RUN)
- notes
- executedAt

## Phases

### Phase 1
- Login
- Dashboard
- CRUD Test Cases
- CRUD Distributions
- Test execution
- Issue tracking