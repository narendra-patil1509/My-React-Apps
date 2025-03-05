import { useState } from 'react'
import * as XLSX from 'xlsx';

function App() {
  const [workBookData, setWorkBookData] = useState({})

  const data = [];

  const textHandle = (e) => {
    const textdata = e.target.value;
    
    const rows = textdata.split('\n');
    console.log(rows);

    rows.forEach((row, index) => {
      // Split each row by tab (\t)
      const parts = row.split('\t');

      // If it's the first row (before any newline), push it in the first position
      data.push(parts);
    });
    console.log(data[0]);
    setWorkBookData(data)
  }

  const resetArea = (e)=> {
    document.getElementById('textArea').value = '';
  }

  const handleExport = (e) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(workBookData);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    // Write the file and trigger the download
    XLSX.writeFile(wb, 'output.xlsx');
  }

  return (
    <>
      <div className="container flex items-center justify-center">
        <div className="card bg-neutral text-neutral-content w-100 my-4">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Excelizer!</h2>
            <p>Text To Excel Convertor</p>
            <textarea type="text" onChange={textHandle} id="textArea" rows="20" cols="100" placeholder="Put text here" className="text-black w-full textarea table-xl textarea-success"></textarea>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handleExport}>Download Excel</button>
              <button className="btn btn-ghost" onClick={resetArea}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
