@echo off
@setlocal
set CUR_DIR=%cd%
set PROJECT_DIR=%~dp0
cd %PROJECT_DIR%
if exist centrifuge (
    cd centrifuge
    git pull
) else (
    git clone https://github.com/centrifugal/centrifuge.git -b master
)
cd %PROJECT_DIR%
call node_modules\.bin\pbjs ./centrifuge/misc/proto/client.proto -t static-module -o ./src/Proto.js
call node_modules\.bin\pbts -o ./src/Proto.d.ts ./src/Proto.js
cd %CUR_DIR%
@endlocal
