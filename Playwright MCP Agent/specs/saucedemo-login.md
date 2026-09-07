# SauceDemo Login Test Plan

## Application Overview

Validate the SauceDemo login flow at https://www.saucedemo.com/ for successful authentication, locked accounts, required-field validation, and invalid credentials. Each test starts from a fresh login page and uses secret_sauce as the password where applicable.

## Test Scenarios

### 1. SauceDemo login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Standard user can log in successfully @smoke

**File:** `tests/login/standard-user-login.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/.
    - expect: The Swag Labs login page is displayed with Username, Password, and Login controls.
  2. Enter standard_user in Username and secret_sauce in Password.
    - expect: Both values are accepted in the corresponding fields.
  3. Click Login.
    - expect: The browser navigates to /inventory.html.
    - expect: The Products heading is visible.

#### 1.2. Locked-out user sees the locked account error @critical

**File:** `tests/login/locked-out-user.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/.
    - expect: The Swag Labs login page is displayed.
  2. Enter locked_out_user in Username and secret_sauce in Password.
    - expect: Both values are accepted in the corresponding fields.
  3. Click Login.
    - expect: The user remains on the login page.
    - expect: The error heading reads: Epic sadface: Sorry, this user has been locked out.

#### 1.3. Login rejects an empty username @regression

**File:** `tests/login/empty-username.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/.
    - expect: The login form is displayed with empty fields.
  2. Leave Username empty, enter secret_sauce in Password, and click Login.
    - expect: The user remains on the login page.
    - expect: The error heading reads: Epic sadface: Username is required.

#### 1.4. Login rejects an empty password @regression

**File:** `tests/login/empty-password.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/.
    - expect: The login form is displayed with empty fields.
  2. Enter standard_user in Username, leave Password empty, and click Login.
    - expect: The user remains on the login page.
    - expect: The error heading reads: Epic sadface: Password is required.

#### 1.5. Login rejects invalid credentials @regression

**File:** `tests/login/invalid-credentials.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/.
    - expect: The Swag Labs login page is displayed.
  2. Enter invalid_user in Username and secret_sauce in Password.
    - expect: Both values are accepted in the corresponding fields.
  3. Click Login.
    - expect: The user remains on the login page.
    - expect: The error heading reads: Epic sadface: Username and password do not match any user in this service.
