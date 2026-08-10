# POS System for Business

An enterprise, multi-tenant SaaS Point-of-Sale (POS) application. The system is built as a Spring Boot REST API backend with a separate React (Vite) frontend, designed to support multiple stores, each with multiple branches, staff roles, and full sales/inventory operations.

> This README reflects progress completed so far and will be updated as the project evolves.

## Tech Stack

**Backend**
- Java 17, Spring Boot 4.1 (Spring Web, Spring Data JPA, Spring Security)
- MySQL (via `mysql-connector-j`)
- JWT-based stateless authentication (`jjwt`)
- Lombok
- Maven

**Frontend**
- React 19 + Vite
- React Router 8
- Tailwind CSS + shadcn/ui component library
- Recharts (dashboard analytics/charts)

## Project Structure

```
pos-system-for-business/   # Spring Boot backend (REST API)
pos-frontend/pos-frontend/ # React + Vite frontend
```

## What's Completed So Far

### Backend (Spring Boot REST API)

**Multi-tenant domain model**
- Core entities: `Store`, `Branch`, `User`, `Product`, `Category`, `Inventory`, `Customer`, `Order`, `OrderItem`, `Refund`, `ShiftReport`, `PaymentSummary`, `StoreContact`
- Role-based access via `UserRole` enum: `ROLE_ADMIN`, `ROLE_STORE_ADMIN`, `ROLE_STORE_MANAGER`, `ROLE_BRANCH_MANAGER`, `ROLE_BRANCH_CASHIER`
- Store lifecycle via `StoreStatus`: `PENDING`, `ACTIVE`, `BLOCKED` (store approval/moderation flow)
- Order lifecycle via `OrderStatus`: `PENDING`, `COMPLETED`
- Supported payment types: `CASH`, `UPI`, `CARD`

**Authentication & Security**
- JWT-based stateless auth (`/auth/signup`, `/auth/login`)
- `SecurityConfig` with stateless sessions, JWT validation filter, BCrypt password hashing, and CORS configured for the local Vite dev server
- Role-gated endpoints (e.g. admin-only routes)

**REST API modules implemented (controller → service → repository → DTO/mapper layers for each):**
| Module | Key endpoints |
|---|---|
| Auth | signup, login |
| Stores | list/create, get by admin, get by employee, update, moderate (approve/block), get by id, delete |
| Branches | get by id, list by store, update, delete |
| Users | get profile, get by id |
| Employees | create under store/branch, update, delete, list by store, list by branch |
| Products | list by store, partial update, search within store, delete |
| Categories | list by store, update, delete |
| Inventory | update, delete, get by branch + product, list by branch |
| Orders | get by id, list by branch, list by cashier, today's orders by branch, list by customer, recent orders by branch |
| Customers | create, update, delete, list, search |
| Refunds | list by cashier, by branch, by shift, by cashier within a date range, get by id |
| Shift Reports | start shift, end shift, get current shift, list by cashier/date, list by cashier, list by branch, get by id |

- Dependencies for **Stripe** and **Razorpay** payment gateways are wired into the project (`pom.xml`) for upcoming online/card payment integration.
- Global exception handling (`UserException`) and a consistent `ApiResponse` wrapper for API responses.

### Frontend (React + Vite)

Built as a role-based dashboard with two main experiences:

**Branch dashboard (managers/admins)**
- Dashboard overview with sales chart, cashier performance, payment breakdown, top products, recent orders, and today's overview widgets
- Inventory management (table view + add/edit dialog)
- Employee management for a branch
- Orders view
- Transactions view
- Reports
- Settings
- Branch layout with topbar/sidebar navigation

**Cashier (point-of-sale terminal)**
- Product browsing/selection section for building an order
- Cart section with cart items, cart summary, and held-order support
- Customer lookup, search, list, details, and purchase history
- Customer & payment section, including discount and note handling, and a payment dialog
- Order creation flow (`CreateOrder`)
- Order history with order details view
- Refunds flow
- Shift report (start/end shift UI)
- Shared sidebar/header navigation for the cashier view

UI is built with shadcn/ui primitives (button, card, dialog, table, select, avatar, badge, chart, etc.) on top of Tailwind, giving the app a consistent design system across both dashboards.


- `application.properties` (DB connection, JWT secret, mail, payment gateway keys) is not committed — needs local environment setup
- Stripe/Razorpay payment gateway logic is not yet wired into the order/payment flow (dependencies added only)
- No automated test coverage beyond the default Spring Boot application context test
- No deployment/CI configuration yet

## Running Locally (backend)

```bash
cd pos-system-for-business
./mvnw spring-boot:run
```
> Requires a local MySQL instance and an `application.properties` with your DB, JWT, and mail credentials (not committed to the repo).

## Running Locally (frontend)

```bash
cd pos-frontend/pos-frontend
npm install
npm run dev
```