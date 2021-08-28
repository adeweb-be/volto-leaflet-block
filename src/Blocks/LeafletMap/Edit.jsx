import React from 'react';
import { useIntl } from 'react-intl';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';

import { ILeafletMapSchema } from './schema';

import loadable from '@loadable/component';
const Map = loadable(() => import('./Map'), {
  ssr: false,
});

const LeafletBlockEdit = (props) => {
  const { block, data, selected } = props;

  const intl = useIntl();
  const schema = ILeafletMapSchema(intl);

  const prePopulateFields = (schema) => {
    const initialValues = {};
    Object.keys(schema.properties).forEach((key) => {
      if (schema.properties[key].hasOwnProperty('initialValue')) {
        initialValues[key] = schema.properties[key].initialValue;
      }
    });
    props.onChangeBlock(block, {
      ...initialValues,
      ...data,
    });
  };

  React.useEffect(() => {
    prePopulateFields(schema);
  }, []);

  const handleChange = (id, value) => {
    props.onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  return (
    <>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          formData={data}
          onChangeField={handleChange}
        />
      </SidebarPortal>
      <Map data={data} />
    </>
  );
};
export default LeafletBlockEdit;
