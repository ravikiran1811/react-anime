import styles from "./index.module.css";

const CardHoverTransition = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      heading: "Mountain View",
      subHeading:
        "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",

      heading: "To The Beach",
      subHeading: "Plan your next beach trip with these fabulous destinations",
    },
    {
      image:
        "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",

      heading: "Desert Destinations",
      subHeading: "It's the desert you've always dreamed of",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",

      heading: "Explore The Galaxy",
      subHeading:
        "Seriously, straight up, just blast off into outer space today",
    },
  ];
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.container}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className={styles.cardContent}>
              <p className={styles.heading}>{card.heading}</p>
              <p className={styles.subHeading}>{card.subHeading}</p>
            </div>
            <p className={styles.headingDuplicate}>{card.heading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHoverTransition;
