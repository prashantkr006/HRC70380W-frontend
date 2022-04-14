import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import DeletePopUp from "../popups/DeletePopUp";
import EditPopUp from "../popups/EditPopUp";
import AddPopUp from "../popups/AddPopUp";
import Operations from "../operations/Operations";
import AdvanceSearchPopUp from "../popups/AdvanceSearchPopUp"

const useStyles = makeStyles((theme) => ({
  MuiDataGridRoot: {
    color: "#fff",
    backgroundColor: "var(--color-bg-variant)",
  },
}));

const columns = [
  {
    field: "slno",
    headerName: "Sl No",
    width: 150,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "businessCode",
    headerName: "Business Code",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "CustomerNumber",
    headerName: "Customer Number",
    width: 250,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "clearDate",
    headerName: "Clear Date",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "businessYear",
    headerName: "Business Year",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "docID",
    headerName: "Documnet ID",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "postingDate",
    headerName: "Posting Date",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "documentcreateDate",
    headerName: "Document Create Date",
    width: 250,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "dueinDate",
    headerName: "Due In Date",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "invoiceCurrency",
    headerName: "Invoice Currency",
    width: 200,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "documentType",
    headerName: "Document Type",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "postingID",
    headerName: "Posting ID",
    width: 180,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "totalopenAmount",
    headerName: "Total Open Amount",
    width: 250,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "baselinecreateDate",
    headerName: "Baseline Create Date",
    width: 250,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "custpaymentTerms",
    headerName: "Customer Payment Terms",
    width: 250,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "invoiceID",
    headerName: "Invoice ID",
    width: 200,
    editable: false,
    cellClassName: "super-app-theme--cell",
  },
];

const DataTable = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);

  const [selectRows, setSelectedRows] = useState([]);
  const [isDelete, setDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [selectionModel, setSelectionModel] = useState([]);
  const [getRowID, setRowID] = useState([]);
  const [isAdd, setAdd] = useState(false);
  const [useSl, setSl] = useState(null);
  const [useBuss, setBuss] = useState(null);
  const [usePosting, setPosting] = useState(null);
  const [useClear, setClear] = useState(null);
  const [useDoc, setDoc] = useState(null);
  const [useDue, setDue] = useState(null);
  const [useBase, setBase] = useState(null);
  const [useBusCode, setBusCode] = useState(null);
  const [useCustNo, setCustNo] = useState(null);
  const [useAdv, setAdv] = useState(false);
  const [useInv, setInv] = useState(null);
  const [usecustPay, setcustPay] = useState(null);
  const [useDocID, setDocID] = useState(null);
  const [useInvCur, setInvCur] = useState(null);
  const [useDocType, setDocType] = useState(null);
  const [usePostId, setPostID] = useState(null);
  const [useTOA, setTOA] = useState(null);
  const [useCPT, setCPT] = useState(null);
  const [useInvID, setInvID] = useState(null);
  const [isSearch, setSearch] = useState();

  //code to fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/backend/DataLoading")
      .then((res) => {
        console.log(res.data);
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Button Open and Close State
  const handleClickDelete = () => {
    setDelete(true);
  };
  const handleCloseDelete = () => {
    setDelete(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  //Advance Search
  const handleAdvSearch = (e) => {                          
    axios
      .get(`http://localhost:8080/backend/AdvanceSearch?custnumber=${useCustNo}&docid=${useDocID}&invoiceid=${useInvID}&buisnessyear=${useBuss}`)
      .then(res => {
        setRows(res.data)
        handleAdvSearchClose()
      })
      .catch(err => {
          console.log(err)
      })
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value.replace(/\D/g,''))
        axios
        .get(`http://localhost:8080/backend/searchData?custnumber=${isSearch}`)
        .then(res => {
          setRows(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  };

  const handleAdvSearchopen = () => {
    setAdv(true);
  };

  const handleAdvSearchClose = () => {
    setDocID("");
    setInvID("");
    setCustNo("");
    setBuss("");
    setAdv(false);
  };
  // Delete button API
  const handleDelete = () => {
    selectRows.map((ids) =>
      axios
        .post(`http://localhost:8080/backend/deleteData?slNo=${ids}`)
        .then(setCount(count + 1), setDelete(false))
        .catch((err) => {
          console.log(err);
        })
    );
  };

  // Edit button API
  const handleEdit = () => {
    console.log(useInv, usecustPay, getRowID);
    axios
      .get(
        `http://localhost:8080/backend/dataUpdate?InvoiceCurrency=${useInv}&CustomerPaymentTerms=${usecustPay}&slno=${getRowID}`
      )
      .then((res) => {
        setCount(count + 1);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Add button API
  const handleAdd = () => {
    let formattedClear = moment(useClear).format("YYYY-MM-DD");
    let formattedPosting = moment(usePosting).format("YYYY-MM-DD");
    let formattedDoc = moment(useDoc).format("YYYY-MM-DD");
    let formattedDue = moment(useDue).format("YYYY-MM-DD");
    let formattedBase = moment(useBase).format("YYYY-MM-DD");
    axios
      .get(
        `http://localhost:8080/backend/dataInsert?slNo=${useSl}&businessCode=${useBusCode}&CustomerNumber=${useCustNo}&clearDate=${formattedClear}` +
          `&businessyear=${useBuss}&docID=${useDocID}&postingDate=${formattedPosting}&documentcreateDate=${formattedDoc}&dueinDate=${formattedDue}&invoiceCurrency=${useInvCur}&documentType=${useDocType}` +
          `&postingID=${usePostId}&totalopenAmount=${useTOA}&baselinecreateDate=${formattedBase}&custpaymentTerms=${useCPT}&invoiceID=${useInvID}`
      )
      .then((res) => {
        setCount(count + 1);
        setSl("");
        setBusCode("");
        setCustNo("");
        setClear("");
        setBuss("");
        setDocID("");
        setPosting("");
        setDoc("");
        setDue("");
        setInvCur("");
        setDocType("");
        setPostID("");
        setTOA("");
        setBase("");
        setCPT("");
        setInvID("");
        setAdd(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeslno = (e) => {
    setSl(e.target.value);
  };
  const handleChangebuss = (e) => {
    setBuss(e.target.value);
  };
  const handleBusCode = (e) => {
    setBusCode(e.target.value);
  };
  const handleCustNo = (e) => {
    setCustNo(e.target.value);
  };
  const handleAddOpen = () => {
    setAdd(true);
  };
  const handleAddClose = () => {
    setSl("");
    setBusCode("");
    setCustNo("");
    setClear("");
    setBuss("");
    setDocID("");
    setPosting("");
    setDoc("");
    setDue("");
    setInvCur("");
    setDocType("");
    setPostID("");
    setTOA("");
    setBase("");
    setCPT("");
    setInvID("");
    setAdd(false);
  };
  const handlechnageInv = (e) => {
    setInv(e.target.value);
  };
  const handlechnagecustPay = (e) => {
    setcustPay(e.target.value);
  };
  const handleDocID = (e) => {
    setDocID(e.target.value);
  };
  const handleInvCur = (e) => {
    setInvCur(e.target.value);
  };
  const handleDocType = (e) => {
    setDocType(e.target.value);
  };
  const handlePostID = (e) => {
    setPostID(e.target.value);
  };
  const handleTOA = (e) => {
    setTOA(e.target.value);
  };
  const handleCPT = (e) => {
    setCPT(e.target.value);
  };
  const handleInvID = (e) => {
    setInvID(e.target.value);
  };

  return (
    <div>
        <Operations
          selectionModel={selectionModel}
          handleClickDelete={handleClickDelete}
          handleClickOpen={handleClickOpen}
          handleAddOpen={handleAddOpen}
          handleAdvSearchopen={handleAdvSearchopen}
          handleSearchChange={handleSearchChange} 
          isSearch={isSearch}
        />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{
            color: "white",
            "& .MuiTablePagination-root": { color: "white" },
            "& .PrivateSwitchBase-root": { color: "white" },
          }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          className={classes.MuiDataGridRoot}
          rows={rows}
          getRowId={(row) => row.slno}
          columns={columns}
          checkboxSelection
          onSelectionModelChange={(selection) => {
            const selectionSet = new Set(selectRows);
            const result = selection.filter(
              (s) => !selectionSet.has(s.selection)
            );
            setSelectedRows(result);
            setSelectionModel(selection);
            setInv(rows[0].invoiceCurrency);
            setcustPay(rows[0].custpaymentTerms);
          }}
          rowHeight={30}
          rowsPerPageOptions={[10, 25, 100]}
          pagination
          onCellClick={(row) => setRowID(row.id)}
          selectionModel={selectionModel}
        />
      </div>
      <div>
        {/* Popup Here */}
        <DeletePopUp
          isDelete={isDelete}
          handleCloseDelete={handleCloseDelete}
          handleDelete={handleDelete}
        />

        <EditPopUp
          open={open}
          handleClose={handleClose}
          useInv={useInv}
          usecustPay={usecustPay}
          handlechnageInv={handlechnageInv}
          handlechnagecustPay={handlechnagecustPay}
          handleEdit={handleEdit}
        />

        <AddPopUp
          isAdd={isAdd}
          handleAddClose={handleAddClose}
          handleAdd={handleAdd}
          handleChangeslno={handleChangeslno}
          handleChangebuss={handleChangebuss}
          useSl={useSl}
          useBuss={useBuss}
          usePosting={usePosting}
          useClear={useClear}
          useDoc={useDoc}
          useDue={useDue}
          useBase={useBase}
          setPosting={setPosting}
          setClear={setClear}
          setDoc={setDoc}
          setDue={setDue}
          setBase={setBase}
          useBusCode={useBusCode}
          handleBusCode={handleBusCode}
          useCustNo={useCustNo}
          handleCustNo={handleCustNo}
          useDocID={useDocID}
          useInvCur={useInvCur}
          useDocType={useDocType}
          usePostId={usePostId}
          useTOA={useTOA}
          useCPT={useCPT}
          useInvID={useInvID}
          handleInvCur={handleInvCur}
          handleDocID={handleDocID}
          handleDocType={handleDocType}
          handlePostID={handlePostID}
          handleTOA={handleTOA}
          handleCPT={handleCPT}
          handleInvID={handleInvID}
        />
        <AdvanceSearchPopUp handleAdvSearchClose={handleAdvSearchClose} useAdv={useAdv} useDocID={useDocID} useInvID={useInvID}
        useCustNo={useCustNo} useBuss={useBuss} handleChangebuss={handleChangebuss} handleCustNo={handleCustNo}
        handleInvID={handleInvID} handleDocID={handleDocID} handleAdvSearch={handleAdvSearch} />
      </div>
    </div>
  );
};

export default DataTable;
