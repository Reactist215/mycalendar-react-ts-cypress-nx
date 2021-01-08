import React, { useEffect, useRef, useState } from 'react';
import { TweenMax } from 'gsap';

import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import moment, { Moment } from 'moment';
import Button from './components/Button';
import MonthView from './components/MonthView';
import { ViewModes } from './contants/others';
import WeekView from './components/WeekView';
import DayView from './components/DayView';
import { textIntro } from './animations/textIntro';

const Title = styled.h1`
  text-align: center;
`;

const ControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  flex: 1;
`;

const ViewWrapper = styled.div`
  margin-top: 1rem;
`;

export function App() {
  const [viewMode, setViewMode] = useState<number>(ViewModes.MONTH);

  const [month, setMonth] = useState<number>(() => {
    return moment().month();
  });

  const [year, setYear] = useState<number>(() => {
    return moment().year();
  });

  const [weeknum, setWeeknum] = useState<number>(() => {
    return moment().isoWeek();
  });

  const [date, setDate] = useState<Moment>(() => {
    return moment();
  });

  const transiationRef = useRef(null);
  const intro = useRef(null);

  useEffect(() => {
    textIntro(intro.current);
  }, []);

  const onClickNextMonth = () => {
    if (viewMode === ViewModes.MONTH) {
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    } else if (viewMode === ViewModes.WEEK) {
      if (weeknum < moment().year(year).endOf('year').isoWeek()) {
        setWeeknum(weeknum + 1);
      } else {
        setYear(year + 1);
        setWeeknum(1);
      }
    } else if (viewMode === ViewModes.DAY) {
      setDate(date.clone().add(1, 'days'));
    }
  };

  const onClickPrevMonth = () => {
    if (viewMode === ViewModes.MONTH) {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    } else if (viewMode === ViewModes.WEEK) {
      if (weeknum > 1) {
        setWeeknum(weeknum - 1);
      } else {
        setYear(year - 1);
        setWeeknum(() => {
          return moment()
            .year(year - 1)
            .endOf('year')
            .isoWeek();
        });
      }
    } else if (viewMode === ViewModes.DAY) {
      setDate(date.clone().add(-1, 'days'));
    }
  };

  const onClickToday = () => {
    if (viewMode === ViewModes.DAY) {
      setDate(moment());
    } else if (viewMode === ViewModes.WEEK) {
      setYear(moment().year());
      setWeeknum(moment().isoWeek());
    } else if (viewMode === ViewModes.MONTH) {
      setYear(moment().year());
      setMonth(moment().month());
    }
  };

  const onChangeViewMode = (viewMode: number) => {
    setViewMode(viewMode);
  };

  return (
    <div>
      <Title ref={intro}>Voyage Calendar</Title>
      {viewMode === ViewModes.MONTH && (
        <Title>{moment([year, month, 1]).format('MM-YYYY')}</Title>
      )}

      {viewMode === ViewModes.WEEK && (
        <Title>
          {year} - week {weeknum}
        </Title>
      )}

      {viewMode === ViewModes.DAY && <Title>{date.format('MM-DD-YYYY')}</Title>}

      <ControllerWrapper>
        <ButtonWrapper>
          <Button title="today" onClick={onClickToday}>
            Today
          </Button>
        </ButtonWrapper>
        <ButtonWrapper style={{ textAlign: 'center' }}>
          <Button title="today" onClick={onClickPrevMonth}>
            {'<'}
          </Button>
          <Button title="today" onClick={onClickNextMonth}>
            {'>'}
          </Button>
        </ButtonWrapper>
        <ButtonWrapper style={{ textAlign: 'right' }}>
          <Button
            title="day_view_btn"
            onClick={() => onChangeViewMode(ViewModes.DAY)}
            className={`${viewMode === ViewModes.DAY ? 'active' : ''}`}
          >
            Day
          </Button>
          <Button
            title="week_view_btn"
            onClick={() => onChangeViewMode(ViewModes.WEEK)}
            className={`${viewMode === ViewModes.WEEK ? 'active' : ''}`}
          >
            Week
          </Button>
          <Button
            title="month_view_btn"
            onClick={() => onChangeViewMode(ViewModes.MONTH)}
            className={`${viewMode === ViewModes.MONTH ? 'active' : ''}`}
          >
            Month
          </Button>
        </ButtonWrapper>
      </ControllerWrapper>

      <ViewWrapper>
        {viewMode === ViewModes.MONTH && (
          <Transition
            timeout={1000}
            in={viewMode === ViewModes.MONTH}
            mountOnEnter
            unmountOnExit
            onExit={() => {
              TweenMax.to(transiationRef.current, {
                autoAlpha: 0,
              });
            }}
            ref={transiationRef}
            addEndListener={(node) => {
              TweenMax.to(node, 0.5, {
                autoAlpha: viewMode === ViewModes.MONTH ? 1 : 0,
                x: viewMode === ViewModes.MONTH ? 0 : 50,
              });
            }}
          >
            <MonthView year={year} month={month} />
          </Transition>
        )}
        {viewMode === ViewModes.WEEK && (
          <Transition
            timeout={1000}
            in={viewMode === ViewModes.WEEK}
            mountOnEnter
            unmountOnExit
            addEndListener={(node) => {
              TweenMax.to(node, 0.5, {
                autoAlpha: viewMode === ViewModes.WEEK ? 1 : 0,
                x: viewMode === ViewModes.WEEK ? 0 : 50,
              });
            }}
          >
            <WeekView year={year} weeknum={weeknum} />
          </Transition>
        )}

        <Transition
          timeout={1000}
          in={viewMode === ViewModes.DAY}
          mountOnEnter
          unmountOnExit
          onExit={() => {
            TweenMax.to(transiationRef.current, {
              autoAlpha: 0,
            });
          }}
          ref={transiationRef}
          addEndListener={(node) => {
            TweenMax.to(node, 0.5, {
              autoAlpha: viewMode === ViewModes.DAY ? 1 : 0,
              x: viewMode === ViewModes.DAY ? 0 : 50,
            });
          }}
        >
          <DayView date={date} />
        </Transition>
      </ViewWrapper>
    </div>
  );
}

export default App;
