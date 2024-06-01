import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseListRow: {
    ':nth-child(odd)': {
      backgroundColor: '#f5f5f5',
    },
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  checkbox: {
    marginRight: '5px',
  },
});

function CourseListRow({ textFirstCell, textSecondCell, isHeader }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={css(styles.courseListRow, isChecked && styles.rowChecked)}>
      {isHeader ? (
        <>
          <th className={css(styles.tdTh)}>{textFirstCell}</th>
          <th className={css(styles.tdTh)}>{textSecondCell}</th>
        </>
      ) : (
        <>
          <td className={css(styles.tdTh)}>
            <input type="checkbox" className={css(styles.checkbox)} onChange={handleCheckboxChange} />
            {textFirstCell}
          </td>
          <td className={css(styles.tdTh)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
  isHeader: PropTypes.bool.isRequired,
};

CourseListRow.defaultProps = {
  textSecondCell: '',
};

export default CourseListRow;
