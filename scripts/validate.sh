#!/bin/bash
# Validation script to catch errors before build

set -e

echo "🔍 Running type check..."
npm run type-check

echo "🔍 Running linter..."
npm run lint

echo "✅ All validations passed!"

