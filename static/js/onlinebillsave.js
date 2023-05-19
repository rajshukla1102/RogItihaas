function saveDivAsPdf() {
    const element = document.getElementById('orderbill');
    const width = element.scrollWidth*3;
    const height = element.scrollHeight*3;
    const pdf = new jsPDF('p', 'pt', [width, height]);

    pdf.html(element, {
      callback: function () {
        pdf.save('bill.pdf');
        window.location.href="./deliverytrack.html"
      },
    });
  }
