import Link from 'next/link';
import Polygon from './Polygon';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const Button = ({
  cta,
  link,
  className,
  polycolor,
  action,
  defaultFontStyle = false
}: {
  cta: string | ReactNode;
  link?: string;
  className?: string;
  polycolor?: string;
  defaultFontStyle?: boolean
  action?: () => void;
}) => {
  return (
    <button onClick={action ? () => action() : undefined}>
      <div
        className={cn(
          'relative bg-primary myFlex justify-center px-4 w-fit h-[43px]',
          !defaultFontStyle ? "text-primaryBlack font-neuebold" : "",
          className,
        )}
      >
        {/* Cut Corner */}
        <Polygon className={cn('w-3 h-3', polycolor)} />
        {link ? <Link href={link}>{cta}</Link> : <span>{cta}</span>}
      </div>
    </button>
  );
};

export default Button;
