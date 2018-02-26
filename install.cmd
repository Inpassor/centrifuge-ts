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
cd %CUR_DIR%
@endlocal
