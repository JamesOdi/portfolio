import { cx } from '@/lib/utils';

export default function Column({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return <div className={cx('flex flex-col gap-4', className)}>{children}</div>;
}
