
$ErrorActionPreference = "Stop"

$path = "$PSScriptRoot\JF_Visa_Consultancy_System.xlsx"
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

try {
    Write-Host "Creating Workbook..."
    $wb = $excel.Workbooks.Add()
    
    # --- Helper Function for Headers ---
    function Format-Header($ws, $headers) {
        for ($i = 0; $i -lt $headers.Count; $i++) {
            $ws.Cells.Item(1, $i+1).Value2 = $headers[$i]
        }
        $headerRange = $ws.Range($ws.Cells.Item(1, 1), $ws.Cells.Item(1, $headers.Count))
        $headerRange.Interior.Color = 7950111  # Dark Blue (approx 1F4E78 reversed or mapped, using integer color)
        # Excel Colors are BGR? No, usually RGB integer, or Index. 
        # Using a safe ColorIndex or specific number. 
        # Let's use generic "49" (Dark Blue-ish) or explicit RGB. 
        # RGB(31, 78, 120) = 31 + 78*256 + 120*256*256 = 7884319
        $headerRange.Interior.Color = 7884319 
        $headerRange.Font.Color = 16777215 # White
        $headerRange.Font.Bold = $true
        $headerRange.HorizontalAlignment = -4108 # xlCenter
        $headerRange.VerticalAlignment = -4108 # xlCenter
        $ws.Range("A2").Select()
        $excel.ActiveWindow.FreezePanes = $true
    }

    # --- SHEET 1: Clients ---
    Write-Host "Processing Clients Sheet..."
    $wsClients = $wb.Worksheets.Item(1)
    $wsClients.Name = "Clients"
    $headers = @(
        "Client ID", "Client Full Name", "Father / Spouse Name", "CNIC Number", "Passport Number",
        "Nationality", "Mobile Number", "WhatsApp Number", "Email Address", "City", 
        "Country Applying For", "Visa Type", "Assigned Consultant", "Client Source", 
        "Date of First Contact", "Current Status", "Remarks"
    )
    Format-Header $wsClients $headers
    
    # Example ID
    $wsClients.Cells.Item(2, 1).Value2 = "JF-001"
    
    # Dropdowns: Visa Type (Col L, 12)
    $visaTypes = "USA Visit,Canada Visit,Europe Study,Europe Visit,Qatar Freelance,Saudi Freelance,UAE Freelance,Australia Visit,New Zealand Visit"
    $dv = $wsClients.Range("L2:L1000").Validation
    $dv.Add(3, 1, 1, $visaTypes) # xlValidateList, xlValidAlertStop, xlBetween

    # Client Source (N, 14)
    $sources = "Facebook,Walk-in,Reference,WhatsApp"
    $dv = $wsClients.Range("N2:N1000").Validation
    $dv.Add(3, 1, 1, $sources)

    # Status (P, 16)
    $statuses = "New,Documents Pending,Filed,Appointment Done,Under Process,Approved,Refused"
    $dv = $wsClients.Range("P2:P1000").Validation
    $dv.Add(3, 1, 1, $statuses)

    $wsClients.Columns.AutoFit()

    # --- SHEET 2: Documents ---
    Write-Host "Processing Documents Sheet..."
    $wsDocs = $wb.Worksheets.Add([System.Reflection.Missing]::Value, $wsClients)
    $wsDocs.Name = "Documents"
    $headersDocs = @(
        "Client ID", "Passport", "Photograph 2x2", "CNIC", "Parents CNIC", "Spouse CNIC",
        "Educational Docs", "Professional Proof", "Financial Proof", "FRC", "MRC", 
        "Police Clearance", "Invitation Letter", "Additional Documents", "Document Status"
    )
    Format-Header $wsDocs $headersDocs

    # Yes/No Validation (B:M)
    $yesNo = "Yes,No"
    for ($col = 2; $col -le 13; $col++) {
       # Validating B2:M1000 - doing per column range
       $colLetter = [char](64 + $col)
       $rng = $wsDocs.Range("${colLetter}2:${colLetter}1000")
       $rng.Validation.Add(3, 1, 1, $yesNo)
    }
    
    # Document Status Formula (O)
    # If using R1C1: =IF(COUNTIF(RC[-13]:RC[-2], "No")>0, "Incomplete", "Complete")
    # Col O is 15. Range is B:M (2:13). Relative to O in row 2: B is RC[-13], M is RC[-2]
    # Simple A1 formula is easier
    for ($r = 2; $r -le 100; $r++) {
        $wsDocs.Cells.Item($r, 15).Formula = "=IF(COUNTIF(B${r}:M${r}, ""No"")>0, ""Incomplete"", ""Complete"")"
    }
    
    # Conditional Formatting O column (15)
    $rngStatus = $wsDocs.Range("O2:O100")
    # Green
    $fc = $rngStatus.FormatConditions.Add(1, 4, "=""Complete""") # xlCellValue, xlEqual
    $fc.Interior.Color = 13037546 # Light Green
    # Red
    $fc2 = $rngStatus.FormatConditions.Add(1, 4, "=""Incomplete""")
    $fc2.Interior.Color = 13551871 # Light Pink/Red

    $wsDocs.Columns.AutoFit()

    # --- SHEET 3: Visa_Process ---
    Write-Host "Processing Visa Sheet..."
    $wsVisa = $wb.Worksheets.Add([System.Reflection.Missing]::Value, $wsDocs)
    $wsVisa.Name = "Visa_Process"
    $headersVisa = @(
        "Client ID", "Country", "Visa Category", "Embassy / VFS", "Application Number",
        "Appointment Date", "Biometrics Date", "Interview Date", "Submission Date",
        "Decision Date", "Visa Result", "Visa Validity", "Consultant Notes"
    )
    Format-Header $wsVisa $headersVisa
    
    # Result Dropdown (K, 11)
    $results = "Approved,Refused,Pending"
    $wsVisa.Range("K2:K1000").Validation.Add(3, 1, 1, $results)
    
    $wsVisa.Columns.AutoFit()

    # --- SHEET 4: Payments ---
    Write-Host "Processing Payments Sheet..."
    $wsPay = $wb.Worksheets.Add([System.Reflection.Missing]::Value, $wsVisa)
    $wsPay.Name = "Payments"
    $headersPay = @(
        "Client ID", "Visa Type", "Total Consultancy Fee", "Embassy / VFS Fee", 
        "Amount Received", "Balance Amount", "Payment Status", 
        "Payment Mode", "Payment Date", "Receipt Number", "Remarks"
    )
    Format-Header $wsPay $headersPay

    # Payment Mode (H, 8)
    $modes = "Cash,Bank,Online"
    $wsPay.Range("H2:H1000").Validation.Add(3, 1, 1, $modes)

    # Formulas
    # Balance (F) = C - E
    # Status (G)
    for ($r = 2; $r -le 100; $r++) {
        $wsPay.Cells.Item($r, 6).Formula = "=C${r}-E${r}"
        $wsPay.Cells.Item($r, 7).Formula = "=IF(C${r}=0, """", IF(F${r}<=0, ""Paid"", IF(E${r}>0, ""Partial"", ""Pending"")))"
    }
    $wsPay.Columns.AutoFit()

    # --- SHEET 5: Follow_Up ---
    Write-Host "Processing Follow_Up Sheet..."
    $wsFollow = $wb.Worksheets.Add([System.Reflection.Missing]::Value, $wsPay)
    $wsFollow.Name = "Follow_Up"
    $headersFollow = @(
        "Client ID", "Follow-Up Date", "Follow-Up Type", "Purpose", 
        "Next Action", "Next Follow-Up Date", "Status"
    )
    Format-Header $wsFollow $headersFollow

    # Type (C, 3)
    $types = "Call,WhatsApp,Visit"
    $wsFollow.Range("C2:C1000").Validation.Add(3, 1, 1, $types)
    
    # Status (G, 7)
    $fStatus = "Pending,Done"
    $wsFollow.Range("G2:G1000").Validation.Add(3, 1, 1, $fStatus)
    
    # Cond Format Overdue (B)
    $rngDate = $wsFollow.Range("B2:B1000")
    # Formula: =AND(G2="Pending", B2<TODAY())
    $fcDate = $rngDate.FormatConditions.Add(2, [System.Reflection.Missing]::Value, "=AND(G2=""Pending"", B2<TODAY())") # xlExpression
    $fcDate.Interior.Color = 13551871 # Light Red
    
    $wsFollow.Columns.AutoFit()
    
    # --- SHEET 6: Consultants ---
    Write-Host "Processing Consultants Sheet..."
    $wsCons = $wb.Worksheets.Add([System.Reflection.Missing]::Value, $wsFollow)
    $wsCons.Name = "Consultants"
    $headersCons = @(
        "Consultant Name", "Total Clients", "Active Cases", "Approved Visas", 
        "Refused Visas", "Approval Percentage", "Total Revenue Generated"
    )
    Format-Header $wsCons $headersCons
    
    # Simple Formulas for first 10 rows
    for ($r = 2; $r -le 10; $r++) {
        $wsCons.Cells.Item($r, 2).Formula = "=COUNTIF(Clients!M:M, A${r})"
        $wsCons.Cells.Item($r, 3).Formula = "=COUNTIFS(Clients!M:M, A${r}, Clients!P:P, ""<>Approved"", Clients!P:P, ""<>Refused"")"
        $wsCons.Cells.Item($r, 4).Formula = "=COUNTIFS(Clients!M:M, A${r}, Clients!P:P, ""Approved"")"
        $wsCons.Cells.Item($r, 5).Formula = "=COUNTIFS(Clients!M:M, A${r}, Clients!P:P, ""Refused"")"
        $wsCons.Cells.Item($r, 6).Formula = "=IF(B${r}>0, D${r}/B${r}, 0)"
        $wsCons.Cells.Item($r, 6).NumberFormat = "0%"
    }
    $wsCons.Columns.AutoFit()

    # --- SHEET 7: Dashboard ---
    Write-Host "Processing Dashboard Sheet..."
    $wsDash = $wb.Worksheets.Add([System.Reflection.Missing]::Value, $wsCons)
    $wsDash.Name = "Dashboard"
    $wsDash.Cells.Item(2, 2).Value2 = "DASHBOARD - JF VISA CONSULTANCY"
    $wsDash.Cells.Item(2, 2).Font.Size = 20
    $wsDash.Cells.Item(2, 2).Font.Bold = $true
    $wsDash.Cells.Item(2, 2).Font.Color = 7884319
    
    $metrics = @(
        @("Total Clients", "=COUNTA(Clients!A:A)-1", 4, 2), # Row 4, Col 2 (B)
        @("Active Cases", "=COUNTIF(Clients!P:P, ""Under Process"")", 4, 4), # D
        @("Approved Visas", "=COUNTIF(Clients!P:P, ""Approved"")", 4, 6), # F
        @("Refused Visas", "=COUNTIF(Clients!P:P, ""Refused"")", 4, 8) # H
    )
    
    foreach ($m in $metrics) {
        $r = $m[2]
        $c = $m[3]
        $wsDash.Cells.Item($r, $c).Value2 = $m[0]
        $wsDash.Cells.Item($r, $c).Font.Bold = $true
        $valCell = $wsDash.Cells.Item($r+1, $c)
        $valCell.Formula = $m[1]
        $valCell.Font.Size = 14
        $valCell.Font.Bold = $true
        # Border
        $valCell.Borders.LineStyle = 1
        $valCell.HorizontalAlignment = -4108
    }
    
    $excel.ActiveWindow.DisplayGridlines = $false
    
    # Save
    Write-Host "Saving to $path..."
    $wb.SaveAs($path)
    $wb.Close()
    $excel.Quit()
    
    Write-Host "Done!"
}
catch {
    Write-Error "An error occurred: $_"
    if ($wb) { $wb.Close($false) }
    if ($excel) { $excel.Quit() }
}
finally {
    # Cleanup COM
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}
