import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, sortIdBasis } from "../../redux/features/postsSlice";
import { fetchUsers, filterUsers } from "../../redux/features/usersSlice";

export const ReduxApi = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.posts);
  const {data:users} = useSelector((state) => state.users);

  const [startIndex,setStartIndex] = useState(0)
  const [endIndex,setEndIndex] = useState(10)
  const [selectedCount,setSelectedCount] = useState(0)

  const filteredData = data?.slice(startIndex,endIndex)
  const paginationCount = []
  const totalPages = Math.ceil(data?.length / 10);

  for (let i = 0; i < totalPages; i++) {
    paginationCount.push(i);
  }

  const hanldeSortId = (type)=>{
    dispatch(sortIdBasis(type))
  }

  const handleBtnClick = (obj)=>{
    setStartIndex(obj*10)
    setEndIndex((obj+1)*10)
    setSelectedCount(obj)
  }

  const handleChangePagination = (type) => {
    if (type === "next" && selectedCount < totalPages - 1) {
      const nextPage = selectedCount + 1;
      setStartIndex(nextPage * 10);
      setEndIndex((nextPage + 1) * 10);
      setSelectedCount(nextPage);
    }
    if (type === "prev" && selectedCount > 0) {
      const prevPage = selectedCount - 1;
      setStartIndex(prevPage * 10);
      setEndIndex((prevPage + 1) * 10);
      setSelectedCount(prevPage);
    }
  };

  const handleFilterUsers = (type)=>{
    dispatch(filterUsers(type))
  }


  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>ReduxApi</h2>
      <button style={{padding:"10px", cursor:"pointer",margin:"10px"}} onClick={()=>hanldeSortId("asc")} >Asc Sort</button>
      <button style={{padding:"10px", cursor:"pointer",margin:"10px"}} onClick={()=>hanldeSortId("desc")} >Desc Sort</button>
      {
        filteredData?.map((obj)=>(
            <div key={obj.id}>
                <h3>{obj.id} - {obj.title}</h3>
            </div>
        ))
      }
      <div style={{marginTop:"20px",display:"flex",gap:"10px",justifyContent:"center"}}>
        {
            paginationCount?.map((obj)=>(
                <button onClick={()=>handleBtnClick(obj)} disabled={obj === selectedCount} 
                style={{userSelect:"none",padding:"8px",cursor: obj === selectedCount ? "not-allowed" : "pointer", background:"orange",border:"none",borderRadius:"4px", fontWeight:"bold"}} key={obj} >{obj+1}</button>
            ))
        }
      </div>
        <div style={{marginTop:"20px",display:"flex",gap:"10px",justifyContent:"center"}}>
            <button onClick={()=>handleChangePagination("prev")} style={{userSelect:"none",cursor:"pointer",border:"none",background:"red",padding:"8px", borderRadius:"4px",color:"whitesmoke",fontWeight:"bold"}} >Previous</button>
            <button onClick={()=>handleChangePagination("next")} style={{userSelect:"none",cursor:"pointer",border:"none",background:"green",padding:"8px", borderRadius:"4px",color:"whitesmoke",fontWeight:"bold"}} >Next</button>
        </div>
        <div style={{marginTop:"10px"}}>
            <div style={{display:"flex",gap:"10px",marginBottom:"10px"}}>
            <button onClick={()=>handleFilterUsers("asc")} style={{padding:"8px",cursor:"pointer"}} >Asc</button>
            <button onClick={()=>handleFilterUsers("desc")} style={{padding:"8px",cursor:"pointer"}} >Desc</button>
            <button onClick={()=>handleFilterUsers("reset")} style={{padding:"8px",cursor:"pointer"}} >Reset</button>
            </div>
            {users?.map((obj)=>(
                <div key={obj.id}>
                    <h4>{obj.id} - {obj.name}</h4>
                </div>
            ))}
        </div>
    </div>
  );
};
