import React, { useEffect, useState } from "react";
import { getDevices } from "../../api/devices/devices";
import Table from "../../components/Table/Table";
import "./FirmwarePage.scss";

function FirmwarePage() {
  const [devices, setDevices] = useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Devices",
        columns: [
          {
            Header: "ID",
            accessor: "id"
          },
          {
            Header: "Status",
            accessor: "status"
          },
          {
            Header: "Current Version",
            accessor: "currentFirmware"
          },
          {
            Header: "Target Version",
            accessor: "targetFirmware"
          }
        ]
      }
    ],
    []
  );
  // const data = []; // React.useMemo(() => makeData(20), []);

  useEffect(() => {
    const deviceRes = getDevices();
    setDevices(deviceRes);
  }, []);

  return (
    <div className="firmware-page">
      <h1>Firmware Page</h1>
      <button>Update Firmware</button>
      <Table columns={columns} data={devices} />
    </div>
  );
}

export default FirmwarePage;
