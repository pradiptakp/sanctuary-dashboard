import React from "react";
export const Card: React.FC<{
  title?: string;
  children: JSX.Element | JSX.Element[] | string | string[];
  className?: string;
}> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-white dark:bg-blueGray-800 shadow-md rounded-lg overflow-hidden text-blueGray-900 dark:text-white ${className} `}
    >
      <div className="py-6 px-8 ">
        {title && (
          <div className="flex flex-col mb-4">
            <h2 className="text-gray-700 font-semibold text-xl tracking-wide mb-2">
              {title}
            </h2>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Card;
