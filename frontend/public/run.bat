@echo off

del Wiktor_Malyska_PL.pdf
del Wiktor_Malyska_ENG.pdf

set PL_URL=https://storage.rxresu.me/cltran1hf006otx3v19aht12j/resumes/pl.pdf
set ENG_URL=https://storage.rxresu.me/cltran1hf006otx3v19aht12j/resumes/eng.pdf

powershell -Command "Invoke-WebRequest -Uri %PL_URL% -OutFile Wiktor_Malyska_PL.pdf"

echo Downloaded PL resume

powershell -Command "Invoke-WebRequest -Uri %ENG_URL% -OutFile Wiktor_Malyska_ENG.pdf"

echo Downloaded ENG resume