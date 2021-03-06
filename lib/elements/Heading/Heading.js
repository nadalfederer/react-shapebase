import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const HeadingElement = (props) => {
  const {
    children,
    className,
    size,
  } = props;

  let ElementType = 'h' + size

  return (
    <ElementType className={className}>
        {children}
    </ElementType>
  );
};

HeadingElement.propTypes = {

  /**
    * Additonal classes.
    */
  className: PropTypes.string,

  /**
    * The color of the heading.
    */
  color: PropTypes.string,

  /**
    * The size of the heading.
    */
  size: PropTypes.oneOf([1,2,3,4,5,6]).isRequired,

  /**
    * The sacle of the heading.
    */
  scale: PropTypes.oneOf([1,2,3,4,5,6]),

  /**
   * The font weight of the heading.
   */
  weight: PropTypes.oneOf(['normal', 'bold', 'bolder'])
};


/** Styling the Component with styled-components */
const Heading = styled(HeadingElement)`
  margin: 0;
  font-size: ${props => props.scale + 'em' || '1rem'};
  ${props => props.weight && css`
    font-weight: ${props => props.weight}
  `}
`;


export default Heading;