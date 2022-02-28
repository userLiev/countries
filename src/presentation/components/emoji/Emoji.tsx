import { FC } from 'react';

type Props = {
  emoji: string;
}

const Emoji: FC<Props> = ({
  emoji,
}) => {
  return (
    <div className="emoji">
      {emoji}
    </div>
  );
};

export default Emoji;
