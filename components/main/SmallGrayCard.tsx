import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const SmallGrayCard = ({
  button,
  bigTitle,
  title,
  subTitle,
  smallText,
  width,
  classname,
  itemsEnd = true,
  buttonPolyColor,
  alternateBgColor,
}: {
  button?: string;
  bigTitle?: string;
  title: string | ReactNode;
  subTitle?: string;
  smallText?: string;
  width?: string;
  classname?: string;
  itemsEnd?: boolean;
  buttonPolyColor?: string;
  alternateBgColor?: string;
}) => {
  return (
    <div
      style={{ minWidth: width }}
      className={cn(
        'min-h-[450px] flex px-7 py-5 border',
        alternateBgColor ? alternateBgColor : 'bg-dimGray',
        classname,
        itemsEnd ? 'items-end' : 'items-start'
      )}
    >
      <div className="space-y-5 max-w-[700px] ">
        {button && (
          <Button
            cta={button}
            className="bg-cerise text-white"
            polycolor={buttonPolyColor ? buttonPolyColor : 'bg-dimGray'}
          />
        )}
        <h1>{bigTitle}</h1>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        {smallText && (
          <Button
            cta={smallText}
            className="bg-transparent p-0 hover:text-primaryGray transition duration-300"
          />
        )}
      </div>
    </div>
  );
};

export default SmallGrayCard;
