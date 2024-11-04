async function convertFiles() {
    const files = document.getElementById('file-input').files;
    if (!files.length) {
      alert("Please select files to convert.");
      return;
    }
  
    const formData = new FormData();
    for (let file of files) {
      formData.append('files', file);
    }
  
    const response = await fetch('/convert', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted_output.pdf';
      link.click();
    } else {
      alert("Conversion failed.");
    }
  }
  