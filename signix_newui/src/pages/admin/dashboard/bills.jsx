import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import converter from "number-to-words";
import style from "../../../styles/style.module.css";
export const Print_View = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/orderitems/single/${id}`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => console.error("Error fetching data", err));
  }, [id]);

  if (!data) return <div>Loading...</div>;

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();
  // / Calculate totals dynamically
  const totalQuantity = data.items.reduce(
    (sum, item) => sum + Number(item.Qty || 0),
    0,
  );
  //   console.log(totalQuantity)
  const totalTaxableValue = data.items
    .reduce((sum, item) => {
      const qty = Number(item.Qty) || 0;
      const rate = Number(item.Rate_Inc_Tax) || 0;
      const discountPercent = Number(item.Dis) || 0;

      const taxableValue = qty * rate;
      const discountAmount = taxableValue * (discountPercent / 100);
      const finalValue = taxableValue - discountAmount;

      return sum + (finalValue > 0 ? finalValue : 0);
    }, 0)
    .toFixed(2);
  const calculateTaxableValue = (item) => {
    const Qty = Number(item.Qty) || 0;
    const rateIncTax = Number(item.Rate_Inc_Tax) || 0;
    const discount = Number(item.Dis) || 0;

    const taxableValue = Qty * rateIncTax;
    const discountamount = taxableValue * (discount / 100);
    const finalValue = taxableValue - discountamount;

    return finalValue >= 0 ? finalValue.toFixed(2) : "0.00";
  };
  const amount = converter.toWords(totalTaxableValue || 0);
  const handlePrint = () => {
    window.print();
  };
  console.log(amount);
  return (
    <>
      <div className="flex justify-end mx-5 my-3">
        <button
          onClick={handlePrint}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${style.print}`}
        >
          Print
        </button>
      </div>
      <div className={style.invoice}>
        {/* Header Section */}
        <table>
          <tbody>
            <tr>
              <td>
                <h2 style={{ textAlign: "center" }}>Tax Invoice</h2>
                Voucher No: <b>{data.voucher_number}</b>
                <br />
                Reference No: {data.reference_number}
                <br />
                Status: {data.status}
              </td>
              <td className={style.qr}>
                <div className={style.bold} style={{ textAlign: "center" }}>e-Invoice</div>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${data.id}`}
                  alt="QR"
                  className="mx-auto"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Address Section */}
        <table>
          <tbody>
            <tr>
              <td width="50%">
                <div className={style.sectionTitle}>Billing From</div>
                <b>{data.customer.name}</b>
                <br />
                {data.customer.Location}, {data.customer.City}
                <br />
                {data.customer.State}, {data.customer.Country}
                <br />
                GSTIN: {data.customer.Gst}
              </td>
              <td width="50%">
                <b>Invoice Date:</b> {formatDate(data.voucher_date)}
                <br />
                <b>Order Date:</b> {formatDate(data.orderDate)}
                <br />
                <b>Transport:</b> {data.customer.Transportation_Mode}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Items Table */}
        <table>
          <thead>
            <tr className={`${style.bold} ${style.center}`}>
              <td>Sl No.</td>
              <td>Description of Goods</td>
              <td>Quantity</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index}>
                <td className={style.center}>{index + 1}</td>
                <td>
                  <b>{item.item_name || "Product Name"}</b>
                </td>
                <td className={style.center}>{item.Qty || 1}</td>
                <td className={style.right}>{calculateTaxableValue(item)}</td>
              </tr>
            ))}
            <tr className={style.bold}>
              <td>Total GST</td>
              <td colSpan="2" className={style.right}>
                {totalQuantity}
              </td>
              <td className={style.right}>₹ {totalTaxableValue}</td>
            </tr>
          </tbody>
        </table>

        {/* Remarks */}
        <table>
          <tbody>
            <tr>
              <td>
                Amount Chargeable (in words)
                <br />
                <b>{amount} only</b>
              </td>
              <td>
                Remark: <b>{data.customer.Remark || "N/A"}</b>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={style.footer}>This is a Computer Generated Invoice</div>
      </div>
      
    </>
  );
};
