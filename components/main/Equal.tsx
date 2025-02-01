import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const Equal = ({ children,className }: { children: ReactNode, className?:string }) => {
  return <div className={cn("grid grid-col lg:grid-cols-2 gap-20", className)}>{children}</div>;
};

export default Equal;
