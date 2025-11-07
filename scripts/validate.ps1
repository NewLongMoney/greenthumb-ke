# Validation script for Windows PowerShell
# Catches errors before build

$ErrorActionPreference = "Stop"

Write-Host "🔍 Running type check..." -ForegroundColor Cyan
npm run type-check
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Type check failed!" -ForegroundColor Red
    exit 1
}

Write-Host "🔍 Running linter..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Linter failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ All validations passed!" -ForegroundColor Green

