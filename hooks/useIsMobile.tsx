import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useIsMobile = () => {
  const isMobileQuery = useMediaQuery('(max-width:600px)');
  const isTabletQuery = useMediaQuery('(max-width:960px)');
  const isDesktopQuery = useMediaQuery('(max-width:1360px)');
  const isLargeDesktopQuery = useMediaQuery('(max-width:1760px)');

  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined);
  const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined);
  const [isLargeDesktop, setIsLargeDesktop] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    setIsMobile(isMobileQuery);
    setIsTablet(isTabletQuery);
    setIsDesktop(isDesktopQuery);
    setIsLargeDesktop(isLargeDesktopQuery);
  }, [isMobileQuery, isTabletQuery, isDesktopQuery, isLargeDesktopQuery]);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};