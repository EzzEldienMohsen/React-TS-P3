import React from 'react';
import {
  useGlobalContext,
  type Timer as TimerProps,
} from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const interval = React.useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = React.useState<number>(
    duration * 1000
  );
  const { isRunning } = useGlobalContext();
  if (remainingTime <= 0) {
    clearInterval(interval.current!);
  }
  React.useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((a) => {
          if (a <= 0) return a;
          return a - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }
    return () => clearInterval(timer);
  }, [isRunning]);
  const formattedRemainingTime: string = (remainingTime / 1000).toFixed(0);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
        <p>{`${formattedRemainingTime} sec`}</p>
      </p>
    </Container>
  );
}
