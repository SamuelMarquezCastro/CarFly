## Git commit messages
- Important: don't commit before I review your changes. I will review your code and provide feedback before you commit. This ensures that the code meets our quality standards and follows best practices.
- Use conventional commit messages. See [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
- Keep commit messages short and concise. Use the imperative mood (e.g., "fix bug" instead of "fixed bug" or "fixes bug").

## Issues first
- Never start coding without an issue number. If the student did not give one, ask for it. If no issue exists yet, ask the student to create one with the issue template on GitHub. Do not create issues for them.
- Work on a separate branch per issue, named `githubname/issueN`. Never commit directly to `main`.
- Every commit references the issue in the footer: `Refs #N` while working on it, `Fixes #N` when the issue is done.

## Context: you are working with students
Explain what you change and why, in plain language. Prefer small steps over large rewrites. Only change files that the issue is about.

## Reflection when closing an issue
When the student wants to close an issue (a commit with `Fixes #N`), you must NOT write the reflection yourself. Instead:
1. Ask the student these four questions, one at a time, and wait for each answer:
   - Geleerd: which concept do you understand now that you did not understand before?
   - AI hielp: where did the AI really help you forward?
   - Bijgestuurd: where was the AI wrong, or where did you have to adjust your prompt? How did you notice?
   - Volgende keer: what will you do differently next time?
2. If an answer is vague (e.g. "alles", "niks", "het werkte"), ask one follow-up question to make it concrete.
3. Put the student's own answers in the commit body, word for word (only fix spelling). `Fixes #N` goes in the footer, at the very end:

```
feat: add car

Geleerd: ...
AI hielp: ...
Bijgestuurd: ...
Volgende keer: ...

Fixes #N
```

## Shader syntax
Use TSL in three.js.

## Security guidelines
- Never commit secrets (e.g., API keys, passwords) to the repository. Use environment variables or secret management tools instead.