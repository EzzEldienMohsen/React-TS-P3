import { useGlobalContext } from '../store/timers-context.tsx';
import Button from './UI/Button.tsx';

export default function Header() {
  const timerCtx = useGlobalContext();
  timerCtx;
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timerCtx.isRunning ? timerCtx.stopTimers : timerCtx.startTimers
        }
      >
        {timerCtx.isRunning ? 'stop Timers' : 'start Timers'}
      </Button>
    </header>
  );
}
