# Script sao lưu toàn diện cho Hệ thống Mạng Xã Hội MXH-K
param (
    [string]$BackupDir = "./backups"
)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$targetDir = "$BackupDir/$timestamp"

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   BẮT ĐẦU SAO LƯU DỮ LIỆU BỀN VỮNG CHO HỆ THỐNG MXH-K" -ForegroundColor Cyan
Write-Host "   Thời gian: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')" -ForegroundColor Cyan
Write-Host "   Thư mục đích: $targetDir" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

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

# 1. Sao lưu 10 cơ sở dữ liệu PostgreSQL
foreach ($db in $databases) {
    $dumpFile = "$targetDir/$db.sql"
    Write-Host "[1/2] Đang sao lưu Database: $db -> $dumpFile ..." -NoNewline
    try {
        & docker exec mxh-postgres pg_dump -U postgres -d $db --clean --if-exists > $dumpFile
        Write-Host " [HOÀN TẤT]" -ForegroundColor Green
    } catch {
        Write-Host " [LỖI: $($_.Exception.Message)]" -ForegroundColor Red
    }
}

# 2. Sao lưu thư mục media uploads
$uploadsSource = "./uploads"
$uploadsTarget = "$targetDir/uploads_backup"
if (Test-Path $uploadsSource) {
    Write-Host "[2/2] Đang sao lưu media uploads sang $uploadsTarget ..." -NoNewline
    Copy-Item -Path $uploadsSource -Destination $uploadsTarget -Recurse -Force
    Write-Host " [HOÀN TẤT]" -ForegroundColor Green
} else {
    Write-Host "[2/2] Không tìm thấy thư mục uploads để sao lưu." -ForegroundColor Yellow
}

Write-Host "`nĐã hoàn thành sao lưu thành công tại: $targetDir" -ForegroundColor Green
