## Validation and command policy

- Do not start a dev server unless I explicitly ask.
- Do not run `npm run dev`, `next dev`, `pnpm dev`, `yarn dev`, or any similar dev-server command unless I explicitly ask.
- Do not run `npm run build`, `pnpm build`, `yarn build`, `npm test`, `npm run lint`, or any similar validation command unless I explicitly ask.
- I will test all changes manually.
- After making code changes, only summarize what changed and list any commands I may want to run myself.
- If you believe a command is necessary, ask me first instead of running it (except for the codegraph re-indexing rule below).

## CodeGraph Setup and Re-indexing
- At the start of a coding or chat session, the working agent MUST check whether the repository contains a `.codegraph` directory.
- If `.codegraph` does not exist, the working agent MUST run `codegraph init .` from the repository root before using CodeGraph or making code changes. This creates the CodeGraph setup and initial index for the repository.
- If any code changes have been made during the session, the working agent MUST run `codegraph index --force` from the repository root at the END of the session so the code graph reflects those changes.
