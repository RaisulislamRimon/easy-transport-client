import React from "react";
import CountUp from "react-countup";

const CommunitiesCard = ({ card }) => {
  const { name, number, description, icon } = card;

  let number1 = number.match(/\d+|\D+/g);
  //   console.log(number1[0]);
  //   console.log(number1[1]);

  //   let number1 = number.match(/\d+|\D+/g)
  //   let number2 = number.match(/\d+|\D+/g)
  //   console.log(number1[0])
  //   console.log(number2[1])

  return (
    <div className="card w-96 bg-sky-100 shadow-xl">
      <figure className="px-10 pt-10">
        {/* <img src={icon} alt="Shoes" className="rounded-xl" /> */}
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="text-3xl font-bold inline-block">
          <CountUp start={0} end={number1[0]} delay={5}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} /> {number1[1]}
              </div>
            )}
          </CountUp>
        </h1>
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CommunitiesCard;
