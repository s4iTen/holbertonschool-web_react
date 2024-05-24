import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const style = isHeader ? styles.headerRow : styles.defaultRow;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(style)}>
          <th colSpan="2" >{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(style)}>
          <th >{textFirstCell}</th>
          <th >{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(style)}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;