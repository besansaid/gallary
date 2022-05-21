import { Typography } from '@material-ui/core';
import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';


const LoadingSkeleton = () => {
    return (
       <Typography justifyContent={'center'} alignItems={'start'}  flexDirection={"row"}>
     
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    
  
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
      
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
     
      </Typography>
  );
}


export default LoadingSkeleton;
