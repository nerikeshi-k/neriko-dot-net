import React from 'react';

type Props = {
  newtab?: boolean;
} & JSX.IntrinsicElements['a'];

export const Link: React.FC<Props> = ({ newtab, ...restProps }) => {
  const newTabAttrs = newtab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return <a {...newTabAttrs} {...restProps} />;
};
