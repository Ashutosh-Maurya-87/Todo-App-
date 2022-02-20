import React from "react";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error('eoor message');

  return "data information";
};

function ConditionalRender() {
  const { data, isError, isFetching } = useQuery("fetchData", fetchUsers, {
    retry: false,
  });
  const renderData = () => {
    if (isFetching) {
      return <div>data is fetching</div>;
    } else if (isError) {
      return <div>Err in data fetching</div>;
    } else {
      return <div>{data}</div>;
    }
  };
  return (
    <>
      {renderData()}
      {isFetching && <div>loading data</div>}
      {isFetching ? <div>data1</div> : <div>data2</div>}
    </>
  );
}

export default ConditionalRender;
