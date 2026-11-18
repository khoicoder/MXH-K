# Script phục hồi dữ liệu từ bản sao lưu cho MXH-K
param (
    [Parameter(Mandatory=$true)]
    [string]$BackupDir
)

if (-not (Test-Path $BackupDir)) {
    Write-Host "Lỗi: Không tìm thấy thư mục backup: $BackupDir" -ForegroundColor Red
    exit 1
}

Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host "   BẮT ĐẦU PHỤC HỒI DỮ LIỆU TỪ BẢN SAO LƯU CHO MXH-K" -ForegroundColor Yellow
Write-Host "   Nguồn phục hồi: $BackupDir" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Yellow

$databases = @(
    "auth_db",
    "user_db",
    "post_db",
    "feed_db",
    "interact_db",
    "media_db",
    "social_db",
    "reels_db",
    "notif_db",
    "search_db"
)

# 1. Phục hồi 10 database
foreach ($db in $databases) {
    $dumpFile = "$BackupDir/$db.sql"
    if (Test-Path $dumpFile) {
        Write-Host "[1/2] Đang phục hồi Database: $db từ $dumpFile ..." -NoNewline
        try {
            Get-Content $dumpFile | & docker exec -i mxh-postgres psql -U postgres -d $db
            Write-Host " [HOÀN TẤT]" -ForegroundColor Green
        } catch {
            Write-Host " [LỖI: $($_.Exception.Message)]" -ForegroundColor Red
        }
    } else {
        Write-Host "[1/2] Bỏ qua $db: không có file dump" -ForegroundColor DarkGray
    }
}

# 2. Phục hồi thư mục uploads
$uploadsBackup = "$BackupDir/uploads_backup"
if (Test-Path $uploadsBackup) {
    Write-Host "[2/2] Đang phục hồi media uploads..." -NoNewline
    Copy-Item -Path "$uploadsBackup/*" -Destination "./uploads" -Recurse -Force
    Write-Host " [HOÀN TẤT]" -ForegroundColor Green
}

Write-Host "`nĐã hoàn thành phục hồi dữ liệu thành công!" -ForegroundColor Green
