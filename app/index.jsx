import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";
import {icon, IconPause, IconPlay}  from "../components/icons"

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 *60,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5*60,
    image: require('./short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15*60,
    image: require('./long.png'),
    display: 'Pausa longa'
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)
  const [timerRunning, setTimerRunnig] = useState(false)

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunnig(false);
    }
  }
  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }
  const toggleTimer = () => {
    if (timerRef.current) {
      clear()
      return;
    }

    setTimerRunnig(true)

    const id = setInterval(() => {
      setSeconds(oldeState => {
        if (oldeState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldeState - 1
      })
    }, 1000);
    timerRef.current = id;
  }


  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por alura.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  text: {
    color: '#fff',
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
})