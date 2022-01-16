import { forwardRef } from "react";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Link } from "react-router-dom";
import { useCoinsContext } from "../../contexts/CoinsContext";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

// // const {image, name, symbol, current_price, high_24h, low_24, total_volume, market_cap, max_supply} = coin;
const CoinsTable = () => {
  const { coins, globalData } = useCoinsContext();

  const formatCurrency = (currency) => {
    if (currency < 1) return `$${currency}`;
    if (currency) return `$${currency.toLocaleString("en-US")}`;
    return "N/A";
  };
  const {
    active_cryptocurrencies,
    market_cap_change_percentage_24h_usd: market_cap_change,
    market_cap_percentage: { btc, eth },
    total_market_cap: { usd: total_market_cap },
    total_volume: { usd: total_volume },
  } = globalData.data;

  return (
    <div className="py-[2rem]">
      <h1 className="font-extrabold text-black text-2xl uppercase mb-[1rem] align-middle">
        <span className="text-yellow-600 text-3xl">|</span>
        <span className="">Cryptocurrency Prices by Market Caps</span>
      </h1>
      <p className="max-w-[60rem] mb-[1rem]">
        The global cryptocurrency market cap today is{" "}
        <strong>{formatCurrency(total_market_cap)}</strong>, a{" "}
        <strong>{market_cap_change.toFixed(1)}%</strong> change in the last 24
        hours. Total cryptocurrency trading volume in the last day is at{" "}
        <strong>{formatCurrency(total_volume)}</strong>. Bitcoin dominance is at{" "}
        <strong>{btc.toFixed(1)}%</strong> and Ethereum dominance is at{" "}
        <strong>{eth.toFixed(1)}%</strong>. Cryptobazar is now tracking{" "}
        <strong>{active_cryptocurrencies}</strong> cryptocurrencies.
      </p>
      <MaterialTable
        title=""
        columns={[
          {
            title: "Rank",
            width: "4%",
            field: "market_cap_rank",
            render: (rowData) => (
              <h1 className="font-semibold">{`#${rowData.market_cap_rank}`}</h1>
            ),
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          {
            title: "Coin",
            field: "image",
            render: (rowData) => (
              <div className="flex gap-[.5rem] items-center">
                <Link to={`/coin/${rowData.id}`}>
                  <img
                    src={rowData.image}
                    alt="avatar"
                    className="w-[2rem] h-[2rem] rounded-full"
                  />
                </Link>
                <Link to={`/coin/${rowData.id}`} className="font-bold">
                  {rowData.name}
                </Link>
              </div>
            ),
          },
          {
            title: "Price",
            field: "current_price",
            render: (rowData) => formatCurrency(rowData.current_price),
          },
          {
            title: "24hr",
            field: "price_change_percentage_24h",
            render: (rowData) => (
              <h1
                className={`${
                  rowData.price_change_percentage_24h < 0
                } ? "text-red-900" : text-green-600`}
              >{`${rowData.price_change_percentage_24h}%`}</h1>
            ),
          },
          {
            title: "High 24hr",
            field: "high_24h",
            render: (rowData) => formatCurrency(rowData.high_24h),
          },
          {
            title: "Low 24hr",
            field: "low_24h",
            render: (rowData) => formatCurrency(rowData.low_24h),
          },
          {
            title: "24hr Volume",
            field: "total_volume",
            render: (rowData) => formatCurrency(rowData.total_volume),
          },
          {
            title: "Market Cap",
            field: "market_cap",
            render: (rowData) => formatCurrency(rowData.market_cap),
          },
        ]}
        data={coins}
        icons={tableIcons}
        options={{
          search: false,
          paging: true,
          pageSize: 20,
          emptyRowsWhenPaging: false,
          pageSizeOptions: [10, 20, 30, 50],
          headerStyle: {
            fontWeight: "bold",
          },
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "cryptobazar"),
            },
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "cryptobazar"),
            },
          ],
          sorting: true,
        }}
      />
    </div>
  );
};

export default CoinsTable;
