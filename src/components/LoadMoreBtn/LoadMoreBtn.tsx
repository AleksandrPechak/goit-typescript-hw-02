import css from "./LoadMoreBtn.module.css";
import { MdExpandMore } from "react-icons/md";

type Props = {
  onMoreClick: () => Promise<void>;
};
const LoadMoreBtn: React.FC<Props> = ({ onMoreClick }) => {
  const handleClick = () => {
    onMoreClick();
  };
  return (
    <div className={css.wrapper}>
      <button type="button" className={css.button} onClick={handleClick}>
        <MdExpandMore />
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;