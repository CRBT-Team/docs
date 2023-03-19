import React from 'react';
//@ts-ignore
import styles from './HTTPMethodBadge.module.scss';

const colors = {
  GET: '#21E64B',
  POST: '#FFCC1E',
  PATCH: '#FBA948',
  PUT: '#FBA948',
  DELETE: '#FE7C7B',
};

export const HTTPMethodBadge = ({
  children,
  type,
}: {
  children: JSX.Element | string;
  type: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}) => (
  <p>
    <span
      className={`${styles['http-method-badge']}`}
      style={{ background: `${colors[type]}` }}
    >
      {type}
    </span>
    {children ? (
      <span className={`${styles['route-name']}`}>{children}</span>
    ) : (
      <></>
    )}
  </p>
);
