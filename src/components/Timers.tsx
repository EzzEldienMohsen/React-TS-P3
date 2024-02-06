import { useGlobalContext } from '../store/timers-context';
import Timer from './Timer';

export default function Timers() {
  const { timers } = useGlobalContext();
  return (
    <ul>
      {timers.map((timer) => {
        return (
          <li key={timer.name}>
            <Timer {...timer} />
          </li>
        );
      })}
    </ul>
  );
}
