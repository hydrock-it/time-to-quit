import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss';

const Info = (props) => {
  const { data } = props;
  return (
    <div className="info">
      <h3>Информация</h3>
      <div className="user-info">
        <div className="user-info__value">
          { data.savedMoney }
        </div>
        <div className="user-info__desc">
          Сэкономлено денег
        </div>
      </div>
      <div className="user-info">
        <div className="user-info__value">
          { data.culcNotSmoked }
        </div>
        <div className="user-info__desc">
          Не выкуренных сигарет
        </div>
      </div>
      <div className="user-info">
        <div className="user-info__value">
          { data.culcDaysWithoutCigarettes }
        </div>
        <div className="user-info__desc">
          Дней без сигарет
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  data: PropTypes.objectOf(Object),
};

Info.defaultProps = {
  data: {},
};

export default Info;
