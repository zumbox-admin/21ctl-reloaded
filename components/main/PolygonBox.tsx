import React, { ReactNode } from 'react';
import Polygon from '../Polygon';
import { cn } from '@/lib/utils';

const PolygonBox = ({
  children,
  classname,
  otherclasses,
}: {
  children?: ReactNode;
  classname?: string;
  otherclasses?: string;
}) => {
  return (
    <div className={cn('relative', otherclasses)}>
      {/* Cut Corner */}
      <Polygon className={cn(classname)} />
      {children}
    </div>
  );
};

export default PolygonBox;
