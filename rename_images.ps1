# PowerShell script to rename files with Turkish characters to their ASCII equivalents

# Change to the public directory
$publicDir = Join-Path -Path $PSScriptRoot -ChildPath "public"
Set-Location -Path $publicDir

# Define the renaming rules
$renameRules = @{
    "ÖdülYarkınBaran.png" = "ODULYARKINBARAN.png"
    "ARDAKESKİN.png" = "ARDAKESKIN.png"
    "ERENURUŞ.png" = "ERENURUS.png"
    "TUĞÇE.png" = "TUGCE.png"
    "EDİZ.png" = "EDIZ.png"
    "YAĞIZYALÇIN.png" = "YAGIZYALCIN.png"
}

# Rename the files
foreach ($file in Get-ChildItem) {
    if ($renameRules.ContainsKey($file.Name)) {
        $newName = $renameRules[$file.Name]
        Write-Host "Renaming $($file.Name) to $newName"
        Rename-Item -Path $file.FullName -NewName $newName -Force
    }
}

Write-Host "Renaming complete!"
