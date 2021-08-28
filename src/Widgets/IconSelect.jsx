import React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import { FormFieldWrapper, Icon } from '@plone/volto/components';
import config from '@plone/volto/registry';
import cx from 'classnames';
import '../style/widget.less';

const IconSelectWidget = (props) => {
  const { id, value, onChange } = props;
  const markerIcons = config.blocks.blocksConfig.leafletMap.markerIcons;

  return (
    <FormFieldWrapper {...props}>
      <Segment className="icon-select-widget">
        {Object.entries(markerIcons).map(([key, markerIcon]) => {
          return (
            <Card
              name={markerIcon.id}
              onClick={() =>
                onChange(id, markerIcon.id === value ? null : markerIcon.id)
              }
              key={markerIcon.id}
              className={cx({ active: markerIcon.id === value })}
            >
              <Icon size={36} name={markerIcon.icon} />
            </Card>
          );
        })}
      </Segment>
    </FormFieldWrapper>
  );
};

export default IconSelectWidget;
