import { cn } from "@/lib/utils";

const Polygon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('-z-0 absolute -top-[1px] -right-[1px]', className)}
      style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
    ></div>
  );
};

export default Polygon;
