import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  onClick?: () => void;
  className?: string;
}

const Pressable: FC<Props> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button className={clsx('pressable', className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Pressable;
