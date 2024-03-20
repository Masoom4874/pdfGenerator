import html2pdf from "html2pdf.js";

const generatePDF = (data) => {
  console.log("hello");
  const dynamicContent = `
    <h4>Membership Type</h4>
    <div>
      <h5>${data.val}</h5>
    </div>
  `;

  html2pdf().from(dynamicContent).save();
};

export default generatePDF;
