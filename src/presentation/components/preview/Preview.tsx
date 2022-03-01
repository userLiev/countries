import { FC } from 'react';

type Props = {
  height: number;
  width: number;
}

const Preview: FC<Props> = ({
  height,
  width,
}) => {
  const stl = {
    height,
    width,
  };

  return (
    <div className="preview" style={stl} />
  );
};

export default Preview;
