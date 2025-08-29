# Frappe x Vue x Radix x Tailwindcss Template

A modern Frappe app template that combines Frappe backend with Vue.js frontend, Radix UI components, and Tailwind CSS for styling.

## Template Setup Instructions

This repository serves as a template for creating new Frappe apps with Vue.js frontend. If you want to use this as a starting point for your own app, you'll need to make several changes:

### 1. Change App Names

**Important**: You must change the app name in multiple places to avoid conflicts:

- **Initial app folder**: Rename `radix_template` to your desired app name
- **App folder within**: Rename the inner `radix_template` folder to match
- **Hooks.py**: Update the app name in the hooks configuration

### 2. Fresh Installation Commands

If you're installing this template fresh:

```bash
# Clone the template
git clone <this-repo-url> your-app-name
cd your-app-name

# Install dependencies
pip install -e .
cd portal && npm install

# Build the frontend
npm run build
```

### 3. Cloning and Customizing

If you're cloning this repo to use as a template:

```bash
# Clone the template
git clone <this-repo-url> your-app-name

# Navigate to your new app directory
cd your-app-name

# Remove the existing git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit: Template setup"

# Update app names in the codebase (see step 1 above)
# Then install and build
pip install -e .
cd portal && npm install
npm run build
```

## Current App: radix_template

This template is currently configured as a base template for Frappe apps with Vue.js frontend.

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch develop
bench install-app radix_template
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/radix_template
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

## License

MIT
