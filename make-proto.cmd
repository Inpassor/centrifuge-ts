@echo off
@setlocal
set CUR_DIR=%cd%
cd %~dp0
if exist node_modules\centrifuge (
    cd node_modules\centrifuge
    git pull
) else (
    git clone https://github.com/centrifugal/centrifuge.git -b master node_modules\centrifuge
)
cd %~dp0
call node_modules\.bin\pbjs ./node_modules/centrifuge/misc/proto/client.proto -t static-module -o ./src/Proto.js
call node_modules\.bin\pbts -o ./src/Proto.d.ts ./src/Proto.js
cd %CUR_DIR%
@endlocal
