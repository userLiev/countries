import clsx from 'clsx';
import { FC } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';

type Props = {
  active?: boolean;
  onClose?: () => void;
}

const Modal: FC<Props> = ({
  active = false,
  onClose = () => undefined,
  children,
}) => {
  const ref = useClickOutside({
    callback: active ? onClose : undefined,
  });

  return (
    <div className={clsx('modal', { show: active })}>
      <div className="content">
        <div ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
