'use client'
import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import Skeleton from '@mui/material/Skeleton';
import App from './App'

const PageRender = () => {
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useIsMobile();
  if (isMobile === undefined || isTablet === undefined || isDesktop === undefined || isLargeDesktop === undefined) {
    return <Skeleton /> // TODO: make good looking skeleton + loading anim
  }
  else {
    return <App />
  }
};

export default PageRender;
