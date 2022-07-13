import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from 'react-native'

const colorGithub = '#010409'
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/67699431?v=4'
const colorFontGithub = '#C9D1D9'
const colorDarkFontGithub = '#4F565E'
const urlToMyGithub = 'https://github.com/ZigfridExe'

export default function App() {
  const handlePressGoToGithub = async () => {
    console.log('Verificando o link')
    const res = await Linking.canOpenURL(urlToMyGithub)
    if (res) {
      console.log('Link aprovado')
      console.log('Abrindo o link....')
      await Linking.openURL(urlToMyGithub)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
      <View style={styles.content}>
        <Image
          accessibilityLabel="Everton na academia"
          style={styles.avatar}
          source={{ uri: imageProfileGithub }}
        />
        <Text
          accessibilityLabel="Nome: Everton"
          style={[styles.defaultText, styles.name]}
        >
          Everton Lyons
        </Text>
        <Text
          accessibilityLabel="Nickname: zigfrid"
          style={[styles.defaultText, styles.nickName]}
        >
          ZigfridExe
        </Text>
        <Text
          accessibilityLabel="Biografia: Everton amante de tecnologia, instrutor técnico, fotógrafo. Em busca de
          treinamentos estudando Análise e Desenvolvimento de Sistemas."
          style={[styles.defaultText, styles.description]}
        >
          Amante de tecnologia, instrutor técnico, fotógrafo. Em busca de
          treinamentos estudando Análise e Desenvolvimento de Sistemas.
        </Text>
      </View>
      <Pressable onPress={handlePressGoToGithub}>
        <View style={styles.button}>
          <Text style={[styles.defaultText, styles.textButton]}>
            Open in Github
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    //column
    backgroundColor: colorGithub,
    flex: 1, //expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center'
    // flexDirection: 'row'
  },
  content: {
    alignItems: 'center',
    padding: 20
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
  },
  defaultText: {
    color: colorFontGithub
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold'
  },
  nickName: {
    fontSize: 20,
    paddingBottom: 8,
    color: colorDarkFontGithub
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
