import React, { ReactNode } from 'react';
import Button from '../Button';
import { cn } from '@/lib/utils';

const GrayBgSection = ({
  buttontext,
  title,
  smallText,
  container = true,
  classname,
  buttonStyle,
  alternateColor,
  containerClassName
}: {
  buttontext?: string;
  buttonStyle?: string;
  title: string | ReactNode;
  smallText?: string;
  container?: boolean;
  containerClassName?: string;
  classname?: string;
  alternateColor?: string;
}) => {
  return (
    <div className={cn(container && 'myContainer', containerClassName)}>
      <div
        className={cn(
          'min-h-[92vh] flex items-end p-6 mt-2 mb-8',
          alternateColor ? alternateColor : "bg-dimGray",
          classname
        )}
      >
        <div className="space-y-2 max-w-[700px]">
          {buttontext && (
            <Button
              cta={<span className='font-neuereg font-bold  text-sm'>
              {buttontext}
              </span>}
              defaultFontStyle
              className={cn(" text-white px-7", buttonStyle)}
              polycolor={alternateColor}
            />
          )}
          {typeof title === 'string' ? <h2>{title}</h2> : title}
          <Button
            cta={smallText}
            className="bg-transparent p-0 hover:text-primaryGray transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GrayBgSection;
