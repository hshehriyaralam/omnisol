import React from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  customDiv?: React.ReactNode;
}

interface LayoutCardsProps {
  cards: CardData[];
  shadowCards?: number[];
}

const LayoutCards: React.FC<LayoutCardsProps> = ({ cards, shadowCards = [] }) => {
  return (
    <section className="w-full py-8 sm:py-10 flex flex-col items-center justify-center px-3 sm:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 max-w-[1100px] w-full">
        {cards.map((card, index) => {
          // Mobile dimensions
          const mobileStyles = "w-[365px] h-[280px]";
          const desktopStyles = "lg:w-auto lg:h-[230px]";

          // ✅ 2nd Card (with custom div)
          if (index === 1) {
            return (
              <div
                key={card.id}
                className={`lg:col-span-2 bg-bgDark text-white rounded-[30px] border-2 border-bgDark flex flex-col lg:flex-row justify-between  items-stretch transition-transform hover:scale-[1.02] ${mobileStyles} ${desktopStyles}`}
              >
                {/* Text Section */}
                <div className="w-full lg:w-[45%] p-6 flex flex-col justify-start text-left lg:pr-4">
                  <h3 className="text-[18px] sm:text-[22px] font-main font-semibold mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-relaxed opacity-90 font-main font-medium leading-[20px]">
                    {card.description}
                  </p>
                </div>

                {/* Custom Div Section */}
                {card.customDiv ? (
                  <div className="w-full lg:w-[60%] flex justify-center items-center ">
                    {card.customDiv}
                  </div>
                ) : (
                  <div className="w-full lg:w-1/2" />
                )}
              </div>
            );
          }

          // ✅ Default Cards (1, 3, 4, 5)
          const isShadow = shadowCards.includes(card.id);

          return (
            <div
              key={card.id}
              className={`rounded-[30px] border-2 border-[#DCE4E8] p-6 flex flex-col justify-start transition-all 
                ${
                  isShadow
                    ? "bg-white shadow-xl"
                    : "bg-white shadow-sm hover:shadow-md"
                } ${mobileStyles} ${desktopStyles}`}
            >
              <div className="flex flex-col justify-start h-full">
                <h3 className="text-[22px] font-main font-medium text-iconColor mb-3 text-left leading-[24px] sm:leading-[28px]">
                  {card.title}
                </h3>
                <p className="text-[14px] text-gray-500 font-main font-medium leading-[20px] text-left opacity-90">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LayoutCards;