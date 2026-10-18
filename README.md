# Non-Shared Secret Demonstration

This repository demonstrates the safer of the three assignment patterns. The application expects an `APP_SECRET` environment variable. A local `.env` can supply it during development, but `.gitignore` prevents that file from entering Git.

## Setup and run

```bash
npm install
cp .env.example .env
```

Edit `.env` and replace the example value, then run:

```bash
npm start
```

Without `.env` or an operating-system `APP_SECRET`, the application intentionally exits with a missing-secret error.

## Required secret

```text
APP_SECRET=<a private value used to sign the demonstration message>
```

The leading dot makes `.env` a hidden file on Unix-like systems such as macOS and Linux. That naming convention reduces ordinary directory clutter, but it does not encrypt or secure the file. Protection comes from excluding it with `.gitignore`, limiting file permissions, and using a dedicated secrets manager in production. The tracked `.env.example` documents the variable name without containing a real secret.
