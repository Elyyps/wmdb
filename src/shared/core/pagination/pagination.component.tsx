import * as React from "react";
import "./pagination.component.scss";

import { Link } from "react-router-dom";
import ArrowRight from "@assets/icons/chevron-right.svg";
import ArrowLeft from "@assets/icons/chevron-left.svg";
import { calculatePages } from "@app/util/calculate-pages/calculate-pages";
import { IconComponent } from "@app/core/icon";

export interface IPaginationComponentProps {
  changePage: (page: number) => void;
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  totalPages: number;
}

const PaginationComponent = ({
  currentPage,
  totalPages,
  nextPage,
  previousPage,
  changePage
}: IPaginationComponentProps) => {
  const pagesString = (): string[] => {
    const pages = calculatePages(totalPages, currentPage);
    const pagesReturn: string[] = [];
    const pagesLength = pages.length;
    for (let i = 0; i < pagesLength; i += 1) {
      if (i > 0 && i < pagesLength) {
        if (pages[i] - pages[i - 1] > 1) pagesReturn.push("...");
      }
      pagesReturn.push(pages[i].toString());
    }

    return pagesReturn;
  };

  return (
    <div className="pagination">
      {totalPages > 1 && (
        <Link onClick={previousPage} to="#" className="prev">
          <IconComponent icon={ArrowLeft} size={"13px"} fillColor="#34aadf" />
          <span className={"uk-visible@s"}>Vorige</span>
        </Link>
      )}

      <ul className="pagination-list">
        {pagesString().map((item, key) => {
          if (item === currentPage.toString()) {
            return (
              <li key={key} className={"active"}>
                <Link
                  onClick={() => {
                    changePage(parseInt(item, 10));
                  }}
                  to="#"
                >
                  {item}
                </Link>
              </li>
            );
          }
          if (item === "...") {
            return (
              <li key={key}>
                <span>...</span>
              </li>
            );
          }

          return (
            <li key={key}>
              <Link
                onClick={() => {
                  changePage(parseInt(item, 10));
                }}
                to="#"
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      {totalPages > 1 && (
        <Link onClick={nextPage} to="#" className="next">
          <span className={"uk-visible@s"}>Volgende</span>
          <IconComponent icon={ArrowRight} size={"13px"} fillColor="#34aadf" />
        </Link>
      )}
    </div>
  );
};

export { PaginationComponent };
