import React from 'react';

type TFillRule = 'nonzero' | 'evenodd' | 'inherit' | null;

interface ISkillPathStyle extends React.CSSProperties {
  'block-progression'?: string,
  'solid-color'?: string,
}

export interface ISkillPath {
  type: string,
  fill?: string,
  d?: string,
  fillRule?: TFillRule,
  clipRule?: TFillRule,
  styles?: ISkillPathStyle,
}

interface IconParameters {
  height: string,
  name: string,
  skill: Array<ISkillPath>,
  width: string,
}

const Icon: React.StatelessComponent<IconParameters> = ({
  height,
  name,
  skill,
  width,
}: IconParameters) => (
  <svg
    height={ height || '70px' }
    width={ width || '70px' }
    version="1"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg">
    {skill.map((path, index) => (
      <path
        key={ `icon-${name}-path-${index}` }
        fill={ path.fill || 'black' }
        d={ path.d || 'none' }
        fillRule={ path.fillRule || 'nonzero' }
        clipRule={ path.clipRule || 'nonzero' }
        style={ path.styles || {} }/>
    ))}
  </svg>
);

export default Icon;
