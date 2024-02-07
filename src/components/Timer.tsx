import React from 'react';
import { type Timer as TimerProps } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = React.useState<number>(
    duration * 1000
  );
  React.useEffect(() => {
    setInterval(() => {
      setRemainingTime((a) => a - 50);
    }, 50);
  }, []);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
    </Container>
  );
}
