@echo off
setlocal
set BUILDLIST=arc-core.proto
:: Install packages
set pkg=protobufjs
if not exist node_modules\%pkg% (
  echo Installing %pkg%...
  call npm install %pkg% 1>NUL 2>NUL
) else echo Found %pkg%.
:: Get binaries
set pbjs=node_modules\.bin\pbjs.cmd
set pbts=node_modules\.bin\pbts.cmd
:: Prepare build
echo Preparing build...
call %pbjs% 1>NUL 2>NUL
call %pbts% 1>NUL 2>NUL
:: Build
echo Compiling protocols to javascript...
call %pbjs% -t static-module --es6 -w es6 -o proto.js %BUILDLIST%
echo Generating typescript definitions...
call %pbts% -o proto.d.ts proto.js
exit /B %ERRORLEVEL%
