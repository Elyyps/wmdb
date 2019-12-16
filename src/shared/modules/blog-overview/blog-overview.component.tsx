import * as React from "react";
import styles from "./blog-overview-component.module.scss";
import { CompanyOutingCardComponent } from "@app/core/company-outing-card";
import { ModuleSectionComponent } from "@app/core/module-section";

import { IBlogOverview } from "@app/api/modules/blog-overview/blog-overview";
import { ICompanyOutingCard } from "@app/api/core/company-outing-card";
import { getCardsWithPagination } from "@app/api/modules/blog-overview/end-point";
import { PaginationComponent } from "@app/core/pagination";
export interface IBlogOverviewComponentProps {
  blogOverview: IBlogOverview;
}

const BlogOverviewComponent = ({ blogOverview }: IBlogOverviewComponentProps) => {
  const [cards, setCards] = React.useState<ICompanyOutingCard[]>(blogOverview.cards);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [windowSize, setWindowSize] = React.useState(0);
  const tabletSize = 959;
  const mobileSize = 639;
  const amountCardsOnTablet = 8;
  const amountCards = 9;

  const take = windowSize <= tabletSize && windowSize >= mobileSize ? amountCardsOnTablet : amountCards;
  const totalPages = blogOverview.cards.length / take;

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  React.useEffect(() => {
    handleResize();
  }, [windowSize]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  React.useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });

    setCards(getCardsWithPagination((currentPage - 1) * take, take));
  }, [currentPage, take]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles["blog-overview"]}>
      <ModuleSectionComponent backgroundColor="#e8f2fc" paddingTop="40px" paddingBottom="40px">
        <div className={"uk-grid uk-child-width-1-3@m uk-child-width-1-2@s "}>
          {cards.map((card, key) => (
            <div className={styles["blog-overview-cards"]} key={key}>
              <CompanyOutingCardComponent {...card} />
            </div>
          ))}
        </div>
        {blogOverview.cards.length > take && (
          <PaginationComponent
            changePage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        )}
      </ModuleSectionComponent>
    </div>
  );
};

export { BlogOverviewComponent };
