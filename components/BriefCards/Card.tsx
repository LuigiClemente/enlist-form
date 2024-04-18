import React from "react";
import {v4 as uuidv4} from 'uuid';
import "./cards.css";

const BriefCards = ({ otherCards, selectedCard }: any) => {
  return (
    <div className="cards-main px-3 py-10 !mt-16 md:!mt-0 ">
      <div className="ProductHeader_ProductHeader__media__QZkzf">
        <div className="HeroAnimation_HeroAnimation__llWWz">
          <div
            className="HeroAnimation_HeroAnimation__card__IpFlG HeroAnimation_HeroAnimation__card--current__IRhY9 card-hover-effect"
            style={{
              border: "1px solid #D3D2FF",
              "--card-dark-color": selectedCard.darkColor,
              "--card-color": selectedCard.color,
            } as React.CSSProperties}
          >
            <img
              src={selectedCard.bottomIcon}
              alt=""
              className="HeroAnimation_HeroAnimation__badge__Iqx8u"
            /> 
            <span className="HeroAnimation_HeroAnimation__title__KFqGQ" style={{color : selectedCard.textColor}} >
              {selectedCard.cardName}
            </span>
          </div>
          {otherCards.map((card: any, index: number) => (
            <div
              key={uuidv4()}  // Use a unique identifier or index if an id is not available
              className="HeroAnimation_HeroAnimation__card__IpFlG card-hover-effect"
              style={{
                border: "1px solid #D3D2FF",
                "--card-dark-color": card.darkColor,
                "--card-color": card.color,
              } as React.CSSProperties}
            >
              <img
                src={card.bottomIcon}
                alt=""
                className="HeroAnimation_HeroAnimation__badge__Iqx8u other-card"
              />
              <span className="HeroAnimation_HeroAnimation__title__KFqGQ" style={{color : card.textColor}}>
                {card.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BriefCards;
