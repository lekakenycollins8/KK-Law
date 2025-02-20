// src/components/QRCodeGenerator.js

import QRCode from "react-qr-code";

type Props = {
  data: string | object
};

const QRCodeGenerator = ({ data }: Props) => {
  const qrCodeData = `${data}}`;

  return (
    <div className="flex justify-center items-center ">
      <div className="border p-8 rounded-lg bg-white shadow-lg">
        <QRCode value={qrCodeData} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
