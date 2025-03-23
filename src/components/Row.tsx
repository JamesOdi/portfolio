import { cx } from '@/lib/utils';

export default function Row({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cx('flex', className)} {...props}>
      {children}
    </div>
  );
}
