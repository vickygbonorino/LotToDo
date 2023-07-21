import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { TaskRemoveIcon } from '../../../../components'
import GradientButton from '../../../../components/buttons/GradientButton'
import { ArrowIcon } from '../../../../components/buttons/Icons'

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 3,
    fontWeight: '500'
  }
})

function WeeklyScreen() {
  const [listOfTasks, setListOfTasks] = useState([
    { id: 1, color: '#4D9DE0' },
    { id: 2, color: '#E15554' },
    { id: 3, color: '#01AC46' },
    { id: 4, color: '#E1BC29' },
    { id: 5, color: '#4D9DE0' },
    { id: 6, color: '#4D9DE0' }
  ])

  const removeTask = (id) => {
    setListOfTasks((prevListOfTasks) => prevListOfTasks.filter((task) => task.id !== id))
  }

  return (
    <View style={{ flex: 1 }}>
      <ArrowIcon
        text='Semana x de mes'
        leftIcon='chevron-left'
        rightIcon='chevron-right'
        onPressLeft={() => console.log('Navegar a la página anterior')}
        onPressRight={() => console.log('Navegar a la página siguiente')}
      />
      <View>
        <Text style={styles.text}>Domingo X</Text>
      </View>
      <SwipeListView
        data={listOfTasks}
        renderItem={({ item }) => <GradientButton color={item.color} />}
        renderHiddenItem={({ item }) => <TaskRemoveIcon task={item} removeTask={removeTask} />}
        disableRightSwipe
        stopRightSwipe={-70}
        rightOpenValue={-70}
      />
    </View>
  )
}

export default WeeklyScreen
