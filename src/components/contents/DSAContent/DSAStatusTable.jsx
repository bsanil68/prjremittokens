import React, { useEffect, useState } from 'react';
import { Table, Column, HeaderCell, Cell, Pagination } from 'rsuite';

const DSAStatusTable = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [page, setPage] = useState(1); // Current page number
  const [limit, setLimit] = useState(10); // Number of items per page

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {

        //   add  the  api call  to pull data  of  status  from blockchain
        const response = await fetch('your_api_endpoint_here');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData); // Update the data state with the fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The empty dependency array ensures that the effect runs once, similar to componentDidMount

  // Handle changes in the page or page size
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeLimit = (newLimit) => {
    setLimit(newLimit);
  };

  // Calculate the start and end indexes for pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Slice the data to display only the items for the current page
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <Table height={420} data={paginatedData}>
        {/* Column definitions here */}
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={data.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={handleChangePage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};

export default DSAStatusTable;
