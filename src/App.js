import React, { Fragment, useCallback } from "react";
import Navbar from "./components/Navbar";
import { createApi } from "unsplash-js";
import { useEffect, useState } from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import CustomizedCard from "./components/CustomizedCard";
import Pagination from "@material-ui/lab/Pagination";
import LoadingSkeleton from "./components/LoadingSkeleton";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "pg7QMxVaBWp26ytla2W0QpONYo-KHRt31KSR1yrNZ_c",
  secret: "d4a7vSnO0in8RxeuK7EoevBCGh2uhyuNyhQuA52zBOY",
});

function App() {
  const [data, setPhotosResponse] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const handlePagChange = (e, pageNum) => {
    setPageNumber(pageNum - 1);
  };

 const fetchData = useCallback((pageNum,searchVal)=>{
    setLoading(true);
    api.search
      .getPhotos({
        query: searchVal || "random",
        orientation: "landscape",
        perPage: "24",
        page: pageNum,
        
      })
      .then((result) => {
        setPhotosResponse(result);
        setLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setLoading(false);
      });
    },[])
    window.scroll(0, 0);

    
  const handleSearch= () =>{
    setPageNumber(0)
    fetchData(0, searchValue)
  }

  useEffect(() => {
    fetchData(pageNumber,searchValue)
   }, [fetchData, pageNumber]);

  return (
    <Fragment>
      <CssBaseline />
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
        width="100%"
      />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{
            backgroundColor: "#F6EEE0",
            minHeight: "100vh",
            paddingBottom: "5%",
            margin: " 0px -23px",
          }}
        >
          {Loading ? (
            <LoadingSkeleton />
          ) : (
            <Typography
              component="div"
              style={{
                display: "flex",
                flex: "4",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.response.results.map((item) => (
                <CustomizedCard key={item.id} {...item} />
              ))}
            </Typography>
          )}
          <Typography
            component="div"
            style={{
              display: "flex",
              flex: "4",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: "5%",
              marginBottom: "2%",
            }}
          >
             <Typography
            component="div"
            style={{
              display: "flex",
              flex: "4",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "row",
              flexWrap: "wrap",
            }}>
              {data?.response?.total_pages>1 &&
            <Pagination
              count={data?.response?.total_pages}
              color="standard"
              onChange={handlePagChange} page={pageNumber+1} defaultValue={pageNumber +1}
            />}
            </Typography>
          </Typography>
        </Typography>
      </Container>
    </Fragment>
  );
}

export default App;

