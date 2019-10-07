export function calculatePages(totalPages: number, currentPage: number): number[] {
  let totalPagesRounded = 0;
  const CURRENT_PAGE = currentPage;
  // tslint:disable-next-line
  if (Number.isInteger(totalPages)) totalPagesRounded = totalPages;
  else {
    for (totalPagesRounded; totalPagesRounded <= totalPages; totalPagesRounded += 1) {}
  }

  /**
   * totalNumbers: the total page numbers to show on the control
   * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
   */
  const pageNeighbours = 1;
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers;
  if (totalPagesRounded > totalBlocks) {
    const startPage = Math.max(2, CURRENT_PAGE - pageNeighbours);
    const endPage = Math.min(totalPagesRounded - 1, CURRENT_PAGE + pageNeighbours);
    let pages = range(startPage, endPage);
    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPagesRounded - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);
    // handle: (1) ... {5 6} [7] {8 9} (10)
    if (hasLeftSpill && !hasRightSpill) {
      const extraPages = range(startPage - spillOffset, startPage - 1);
      pages = [...extraPages, ...pages];
    } else if (!hasLeftSpill && hasRightSpill) {
      // handle: (1) {2 3} [4] {5 6} ... (10)
      const extraPages = range(endPage + 1, endPage + spillOffset);
      pages = [...pages, ...extraPages];
    } else if (hasLeftSpill && hasRightSpill) {
      // handle: (1) ... {4 5} [6] {7 8} ... (10)
      pages = [...pages];
    }

    return [1, ...pages, totalPagesRounded];
  }

  return range(1, totalPagesRounded);
}

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const resultArray = [];
  while (i <= to) {
    resultArray.push(i);
    i += step;
  }

  return resultArray;
};
