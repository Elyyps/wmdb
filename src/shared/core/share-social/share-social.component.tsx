import * as React from "react";
import styles from "./share-social-component.module.scss";
import { IconComponent } from "../icon";
import { EmailShareButton } from "react-share";
import MAIL from "@assets/icons/mail.svg";
import { IMailShare } from "@app/api/core/mail-share";

export interface IShareSocialComponentProps {
  email: IMailShare;
}

const ShareSocialComponent = (props: IShareSocialComponentProps) => {
  const getShareControl = (nameSocial: string | undefined, icon: string) => (
    <div className={styles["share__social-link"]}>
      <div className={styles["share__social-icon"]}>
        <IconComponent icon={icon} size="15px" fillColor="#101010" />
      </div>
      <div className={styles["share__social-text"]}>
        <div className={styles["share__social-title"]}>{nameSocial}</div>
      </div>
    </div>
  );
  const MailShareButtonComponent = (prop: IMailShare) => (
    <EmailShareButton subject={prop.subject} body={prop.title} url={prop.url}>
      {getShareControl(prop.nameSocialShare, MAIL)}
    </EmailShareButton>
  );

  return (
    <div className={styles["share"]}>
      <MailShareButtonComponent
        nameSocialShare={props.email.nameSocialShare}
        title={props.email.title}
        subject={props.email.subject}
        url={props.email.url}
      />
    </div>
  );
};

export { ShareSocialComponent };
