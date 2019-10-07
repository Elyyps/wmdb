import React, { useState } from "react";
import { IconComponent, Button } from "@app/modules/core";
import { Link } from "react-router-dom";
import ChevronRight from "@assets/icons/chevron-right.svg";
import ChevronLeft from "@assets/icons/chevron-left.svg";
import style from "./pagination-component.module.scss";
import { calculatePages } from "../calculate-pages/calculate-pages";

export interface IPaginationComponentProps {
  changePage?: (page: number) => void;
  currentPage: number;
  totalItems: number;
}

const Pagination: React.FunctionComponent<IPaginationComponentProps> = (props: IPaginationComponentProps) => {
  function changePage(page: number) {
    if (props.changePage) {
      props.changePage(page);
    }
  }
  function nextPage() {
    if (props.currentPage < props.totalItems) {
      changePage(props.currentPage + 1);
    }
  }
  function previousPage() {
    if (props.currentPage > 1) {
      changePage(props.currentPage - 1);
    }
  }

  // Render pagination buttons according with pagination value
  // If the difference between two pages is more than 1, "..." will be added instead a page button
  function renderPaginationButton(pages: number) {
    const pagesIndex = calculatePages(pages, props.currentPage);
    const pagesLabel = [];
    // refactor to map, use index param
    for (let i = 0; i < pagesIndex.length; i += 1) {
      const index = pagesIndex[i];
      if (i > 0) {
        if (pagesIndex[i] - pagesIndex[i - 1] > 1) {
          pagesLabel.push(". . .");
        }
      }
      pagesLabel.push(
        <li key={i}>
          <Link
            to="#"
            onClick={() => {
              changePage(index);
            }}
            className={
              props.currentPage === pagesIndex[i]
                ? `${style["pagination-item"]} ${style["pagination-item--current"]}`
                : style["pagination-item"]
            }
          >
            {pagesIndex[i]}
          </Link>
        </li>
      );
    }

    return pagesLabel;
  }

  return (
    <div>
      {props.totalItems > 1 && (
        <div className={style["pagination"]}>
          <Button size={32} onClick={previousPage} icon={ChevronLeft} variant="primary" />
          <ul className={style["pagination-list"]}>{renderPaginationButton(props.totalItems)}</ul>
          <Button size={32} onClick={nextPage} icon={ChevronRight} variant="primary" />
        </div>
      )}
    </div>
  );
};

export { Pagination };
