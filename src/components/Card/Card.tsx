import Modal from "../Modal/Modal";
import { Link } from "../Projects/AchievementsStaticData";

type CardProps = {
  header: string;
  description: string;
  buttonText?: string;
  i: number;
  links: Link[];
};

const Card = ({
  header,
  description,
  buttonText = "See More",
  i,
  links,
}: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl text-black w-8/12 md:w-11/12 lg:w-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body h-64">
        <div className="text-2xl font-semibold truncate ...">{header}</div>
        <div className="line-clamp-4">{description}</div>
        <div className="card-actions justify-end absolute bottom-4 right-4">
          <label
            htmlFor={`my-modal-${i}`}
            className="btn btn-outline btn-primary"
          >
            {buttonText}
          </label>
        </div>
      </div>
      <Modal header={header} description={description} i={i} links={links} />
    </div>
  );
};

export default Card;
