
$ErrorActionPreference = "Stop"

$path = "$PSScriptRoot\JF_Visa_Software_v2.xlsx"
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

try {
    Write-Host "Creating V2 Software Workbook..."
    $wb = $excel.Workbooks.Add()

    # --- Setup Styling Constants ---
    $xlSrcRange = 1 # xlSrcRange
    $xlYes = 1 # xlYes (Header exists)
    $const_DarkBlue = 7884319 # RGB(31, 78, 120)
    
    function Setup-Sheet($name) {
        if ($wb.Sheets.Count -eq 1 -and $wb.Sheets.Item(1).Name -match "Sheet") {
             $ws = $wb.Sheets.Item(1)
             $ws.Name = $name
        } else {
             $ws = $wb.Worksheets.Add([System.Reflection.Missing]::Value, $wb.Worksheets.Item($wb.Worksheets.Count))
             $ws.Name = $name
        }
        $excel.ActiveWindow.DisplayGridlines = $false
        return $ws
    }

    function Add-BackLink($ws) {
        $ws.Cells.Item(1, 1).Value2 = "⬅ BACK TO DASHBOARD"
        $ws.Hyperlinks.Add($ws.Cells.Item(1, 1), "", "'Dashboard'!A1")
        $ws.Cells.Item(1, 1).Font.Bold = $true
        $ws.Cells.Item(1, 1).Font.Color = $const_DarkBlue
    }

    function Create-Table($ws, $name, $startCell, $headers) {
        # Determine range end
        $colCount = $headers.Count
        $startRow = $ws.Range($startCell).Row
        $startCol = $ws.Range($startCell).Column
        
        # Write Headers
        for ($i = 0; $i -lt $colCount; $i++) {
            $ws.Cells.Item($startRow, $startCol + $i).Value2 = $headers[$i]
        }
        
        $endColLetter = [char](64 + $startCol + $colCount - 1)
        # Assuming single letter column for simplicity in this logic, logic update needed for >26 cols but we are safe here
        if ($startCol + $colCount - 1 -gt 26) { $endColLetter = "AA" } # Fallback fix if needed
        
        $rangeAddr = "${startCell}:${endColLetter}${startRow}"
        $rng = $ws.Range($rangeAddr)
        
        $listObj = $ws.ListObjects.Add(1, $rng, $null, 1) # xlSrcRange, range, linkSrc, xlYes
        $listObj.Name = $name
        $listObj.TableStyle = "TableStyleMedium2" # Blue style
        
        return $listObj
    }

    # ================= DASHBOARD =================
    Write-Host "Building Dashboard..."
    $wsDash = Setup-Sheet "Dashboard"
    try { $wsDash.Tab.Color = $const_DarkBlue } catch {}
    
    $wsDash.Cells.Item(2, 2).Value2 = "JF VISA CONSULTANCY"
    $wsDash.Cells.Item(2, 2).Font.Size = 24
    $wsDash.Cells.Item(2, 2).Font.Bold = $true
    $wsDash.Cells.Item(2, 2).Font.Color = $const_DarkBlue
    $wsDash.Cells.Item(3, 2).Value2 = "Management Software v2"
    
    # Navigation Buttons (Cells behaving as buttons)
    $navItems = @(
        @("Please Manage: ", 5, 2),
        @("CLIENTS DATABASE", 6, 2, "Clients"),
        @("DOCUMENT CHECKLIST", 8, 2, "Documents"),
        @("VISA PROCESS", 10, 2, "Visa_Process"),
        @("PAYMENTS", 12, 2, "Payments"),
        @("FOLLOW UPS", 14, 2, "Follow_Up"),
        @("CONSULTANTS", 16, 2, "Consultants")
    )

    foreach ($item in $navItems) {
        $r = $item[1]
        $c = $item[2]
        $wsDash.Cells.Item($r, $c).Value2 = $item[0]
        if ($item.Count -gt 3) { # Is a Link
            $wsDash.Hyperlinks.Add($wsDash.Cells.Item($r, $c), "", "'$($item[3])'!A1")
            $cell = $wsDash.Cells.Item($r, $c)
            $cell.Interior.Color = $const_DarkBlue
            $cell.Font.Color = 16777215 # White
            $cell.Font.Bold = $true
            $cell.HorizontalAlignment = -4108 # Center
            $cell.RowHeight = 30
            $cell.ColumnWidth = 30
        }
    }

    # ================= 1. CLIENTS (Master) =================
    Write-Host "Building Clients Database..."
    $wsClients = Setup-Sheet "Clients"
    Add-BackLink $wsClients
    
    $hClients = @("Client ID", "Full Name", "Father Name", "CNIC", "Passport", "Mobile", "Visa Type", "Status", "Remarks")
    $tblClients = Create-Table $wsClients "tblClients" "A3" $hClients
    
    # Add dummy data to ensure table has rows for range definition
    $wsClients.Cells.Item(4, 1).Value2 = "JF-001"
    $wsClients.Cells.Item(4, 2).Value2 = "Sample Client"
    $wsClients.Cells.Item(4, 7).Value2 = "USA Visit"
    $wsClients.Cells.Item(4, 8).Value2 = "New"
    
    # Define Named Range for Client IDs dynamically based on table column
    # Formula: =tblClients[Client ID]
    $wb.Names.Add("ListClientIDs", "=tblClients[Client ID]")
    
    $wsClients.Columns.AutoFit()

    # ================= 2. DOCUMENTS (Child) =================
    Write-Host "Building Documents Module..."
    $wsDocs = Setup-Sheet "Documents"
    Add-BackLink $wsDocs
    
    # Headers - Note integration columns
    $hDocs = @("Client ID", "Client Name (Auto)", "Visa Type (Auto)", "Passport", "Photos", "CNIC", "Statement", "Police Cert", "Status")
    $tblDocs = Create-Table $wsDocs "tblDocs" "A3" $hDocs
    
    # DATA VALIDATION: Client ID
    $rngID = $wsDocs.Range("A4:A1000") # Apply to large range for table expansion
    $rngID.Validation.Add(3, 1, 1, "=ListClientIDs")
    
    # FORMULAS: Auto-Fetch
    # B: Name. =IFERROR(VLOOKUP([Client ID], tblClients, 2, FALSE), "")
    # Note: Powershell needs escaped quotes.
    $wsDocs.Range("B4").Formula = "=IFERROR(VLOOKUP([@[Client ID]], tblClients, 2, FALSE), """")"
    $wsDocs.Range("C4").Formula = "=IFERROR(VLOOKUP([@[Client ID]], tblClients, 7, FALSE), """")"
    
    # Status Formula
    # If any "No" in D:H -> Incomplete
    $wsDocs.Range("I4").Formula = "=IF(COUNTIF(tblDocs[@[Passport]:[Police Cert]], ""No"")>0, ""Incomplete"", ""Complete"")"

    $wsDocs.Columns.AutoFit()

    # ================= 3. VISA PROCESS (Child) =================
    Write-Host "Building Visa Module..."
    $wsVisa = Setup-Sheet "Visa_Process"
    Add-BackLink $wsVisa
    
    $hVisa = @("Client ID", "Client Name", "Applying For", "Embassy", "App Date", "Result", "Notes")
    $tblVisa = Create-Table $wsVisa "tblVisa" "A3" $hVisa
    
    $wsVisa.Range("A4:A1000").Validation.Add(3, 1, 1, "=ListClientIDs")
    $wsVisa.Range("B4").Formula = "=IFERROR(VLOOKUP([@[Client ID]], tblClients, 2, FALSE), """")"
    $wsVisa.Range("C4").Formula = "=IFERROR(VLOOKUP([@[Client ID]], tblClients, 7, FALSE), """")"
    
    $wsVisa.Range("F4:F1000").Validation.Add(3, 1, 1, "Approved,Refused,Pending")
    
    $wsVisa.Columns.AutoFit()

    # ================= 4. PAYMENTS (Child) =================
    Write-Host "Building Payments Module..."
    $wsPay = Setup-Sheet "Payments"
    Add-BackLink $wsPay
    
    $hPay = @("Client ID", "Client Name", "Total Fee", "Paid Amount", "Balance", "Pay Status", "Method", "Date")
    $tblPay = Create-Table $wsPay "tblPay" "A3" $hPay
    
    $wsPay.Range("A4:A1000").Validation.Add(3, 1, 1, "=ListClientIDs")
    $wsPay.Range("B4").Formula = "=IFERROR(VLOOKUP([@[Client ID]], tblClients, 2, FALSE), """")"
    
    # Balance
    $wsPay.Range("E4").Formula = "=[@[Total Fee]]-[@[Paid Amount]]"
    # Status
    $wsPay.Range("F4").Formula = "=IF([@[Total Fee]]="""", """", IF([@Balance]<=0, ""Paid"", IF([@[Paid Amount]]>0, ""Partial"", ""Pending"")))"
    
    $wsPay.Columns.AutoFit()

    # ================= 5. CONSULTANTS =================
    Write-Host "Building Consultants Module..."
    $wsCons = Setup-Sheet "Consultants"
    Add-BackLink $wsCons
    $hCons = @("Consultant Name", "Total Cases", "Revenue")
    $tblCons = Create-Table $wsCons "tblCons" "A3" $hCons
    $wsCons.Columns.AutoFit()
    
    
    # ================= DASHBOARD SUMMARY =================
    # Add some live stats referencing the tables
    $wsDash.Cells.Item(6, 6).Value2 = "ACTIVE CLIENTS"
    $wsDash.Cells.Item(7, 6).Formula = "=COUNTA(tblClients[Client ID])" # Counts rows in table
    $wsDash.Cells.Item(7, 6).Font.Size = 30
    
    $wsDash.Cells.Item(6, 9).Value2 = "PENDING VISAS"
    $wsDash.Cells.Item(7, 9).Formula = "=COUNTIF(tblVisa[Result], ""Pending"")"
    $wsDash.Cells.Item(7, 9).Font.Size = 30
    
    # Cleanup
    $wsDash.Select()
    
    Write-Host "Saving V2..."
    $wb.SaveAs($path)
    $wb.Close()
    $excel.Quit()
    Write-Host "Success! Created JF_Visa_Software_v2.xlsx"
}
catch {
    Write-Error "Error: $_"
    if ($excel) { $excel.Quit() }
}
finally {
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
    [System.GC]::Collect() 
}
