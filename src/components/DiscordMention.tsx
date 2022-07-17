import React from 'react';
//@ts-ignore
import styles from './DiscordMention.module.scss';

type MentionTypes = 'user' | 'role' | 'channel';

export const DiscordMention = ({
  children,
  type = 'user',
}: {
  children: JSX.Element | string;
  type: MentionTypes;
}) => {
  return (
    <span className={`${styles.mention} ${styles[type]}`}>{children}</span>
  );
};
