# Contributing to Sheride

First off, thank you for considering contributing to Sheride! It's people like you that make Sheride such a great tool for the community. We welcome contributions of all kinds, including bug fixes, new features, documentation improvements, and more.

## Where do I go from here?

If you've noticed a bug or have a question, please search the issue tracker to see if someone else in the community has already created a ticket. If not, go ahead and make one!

## Fork & create a branch

If this is something you think you can fix, then fork Sheride and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```sh
git checkout -b 325-add-dark-mode-support
```

## Local Development Setup

1. Fork the repository and clone it to your local machine.
2. Navigate to the project directory: `cd sheride-prototype`
3. Install dependencies using npm: `npm install`
4. Start the development server: `npm run dev`

### Code Style & Linting

We use standard linting tools (`eslint`) to maintain code quality and consistency in our React + TypeScript project. 
Before submitting a pull request, please make sure your code passes our linting checks:

```sh
npm run lint
```

Make sure to resolve any linting errors or warnings before committing.

### Commit Messages

We encourage clear and descriptive commit messages. A good commit message should be concise and explain *what* the change does and *why*.

Example:
```
feat: add user authentication form
fix: resolve alignment issue on mobile navigation
docs: update installation instructions in README
```

## Submitting a Pull Request

1. **Push your branch** to your fork:
   ```sh
   git push origin my-feature-branch
   ```
2. **Open a Pull Request** against the `main` branch of the upstream repository.
3. Provide a clear and detailed description of your changes in the PR description.
4. Wait for code review. We will review your PR as soon as possible and provide feedback.

## Reporting Bugs

When reporting a bug, please include:
- A clear and descriptive title.
- Steps to reproduce the bug.
- Expected behavior vs. actual behavior.
- Any relevant logs, screenshots, or environment details (browser, OS, etc.).

## Suggesting Enhancements

If you have an idea for a new feature or improvement:
- Check if it has already been suggested in the issue tracker.
- Provide a detailed description of the feature and why it would be beneficial.
- If possible, provide a user story or example of how it would be used.

Thank you for contributing!
