import * as express from "express";
import MobileDetect from "mobile-detect";
import { settingsActions } from "@app/stores/settings";
import { playgroundActions } from "@app/stores/playground";
import { ITestItem } from "@app/api";

export const moduleFetcher: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    if (req.url.indexOf("favicon") > 0) {
      return next();
    }
    // TODO: Make API call for initial data here!
    const result: ITestItem[] = [{ name: "item 1", amount: 20 }, { name: "item 2", amount: 15 }];

    res.locals.store.dispatch(playgroundActions.setTestItems({ testItems: result }));
  } catch (error) {
    // new FatalError(error.name, error.message, error.stack);
  }

  next();
};

export const setIsMobile: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  const md = new MobileDetect(req.headers["user-agent"] || "");

  if (md.phone()) {
    res.locals.store.dispatch(settingsActions.setIsMobile({ isMobile: true }));
  }

  return next();
};
