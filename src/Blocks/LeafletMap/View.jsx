import React from 'react';
import loadable from '@loadable/component';

const Map = loadable(() => import('./Map'), {
  ssr: false,
});

const LeafletBlockView = (props) => {
  const { data } = props;

  return <Map data={data} />;
};

export default LeafletBlockView;
