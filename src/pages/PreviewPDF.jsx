import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from "@react-pdf/renderer";
import { getItem } from '../utils/storage'
import img from '../assets/img/Icon/LOGO-UNACH.png'

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "#000000",
  },
  section: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  viewer: {
    width: window.innerWidth, 
    height: window.innerHeight,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    width: 90,
    height: 50,
  },
  leftColumn: {
    flex: 1,
  },
  centerColumn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
  },
});

// Create Document Component
function PreviewPDF() {
  const storedData = getItem('currentProyect');

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          {/* ! THIS SECTION WILL TAKE 10% OF THE PAGE */}
          <View style={styles.section}>
            {/* toma el 25% de width*/}
            <View style={styles.leftColumn}>
              <Image src={img} style={styles.image} />
            </View>
            {/* toma el 50% centrado */}
            <View style={styles.centerColumn}>
              <Text style={styles.title}>Universidad Autónoma de Chiapas</Text>
              <Text>
                Dirección General de Investigación y Posgrado
                Dirección de Investigación</Text>
            </View>
            {/* toma el 25% a la derecha*/}
            <View style={styles.rightColumn}>
              <Image src={img} style={styles.image} />
            </View>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
          {/* Table */}
          <View style={styles.section}>
            <View style={styles.cell}><Text>Cell 1</Text></View>
            <View style={styles.cell}><Text>Cell 2</Text></View>
            <View style={styles.cell}><Text>Cell 3</Text></View>
            <View style={styles.cell}><Text>Cell 4</Text></View>
          </View>
          <View style={styles.section}>
            <View style={styles.cell}><Text>Cell 5</Text></View>
            <View style={styles.cell}><Text>Cell 6</Text></View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PreviewPDF;
