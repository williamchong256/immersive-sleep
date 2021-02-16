import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  CardTitle, PageTitle,
} from './Themes';

export default function Start() {
  const [time, setTime] = React.useState(new Date().toTimeString().split(' ')[0]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toTimeString().split(' ')[0]);
    }, 100);

    return () => clearInterval(timer);
  });

  return (
    <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ flex: 1, padding: 20, paddingTop: 80 }}>
      <CardTitle center>Begin Sleep Session</CardTitle>
      <PageTitle center>{time}</PageTitle>
    </LinearGradient>
  );
}
