import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    fontSize: 14,
    margin: 12,
    fontFamily: 'Oswald'
  },
  sectionSummary: {
    fontSize: 14,
    margin: 2,
    fontFamily: 'Oswald'
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  warning: {
    margin: 6,
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Oswald',
    color: '#FDD835'
  },
  textSummary: {
    margin: 5,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 0,
    marginHorizontal: 50,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  headerWarning: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
    fontWeight: 'bold'
  },
  tool: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  optional: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Oswald',
    color: 'grey'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 40,
    textAlign: 'center',
    color: 'grey',
  },
  imageBottom: {
    marginVertical: 105,
    marginHorizontal: 245,
    marginTop: 10,
    position: 'absolute',
    bottom: -80,
    left: 55,
    right: 0,
  },
});
