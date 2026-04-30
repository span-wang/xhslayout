@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "POWERSHELL_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
set "REPO_ROOT=%SCRIPT_DIR%..\.."

"%POWERSHELL_EXE%" -ExecutionPolicy Bypass -File "%REPO_ROOT%\scripts\start-named-remote.ps1"
