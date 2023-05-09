import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    marginBottom: 5
  }
});

const PDFReport = ({ result }) => {
  const generateReport = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Medical Report</Text>
          <Text style={styles.subheading}>Results:</Text>
          <Text style={styles.text}>Bacterial Pneumonia: {result['Bacterial Pneumonia']}%</Text>
          <Text style={styles.text}>Corona Virus Disease: {result['Corona Virus Disease']}%</Text>
          <Text style={styles.text}>Normal: {result['Normal']}%</Text>
          <Text style={styles.text}>Tuberculosis: {result['Tuberculosis']}%</Text>
          <Text style={styles.text}>Viral Pneumonia: {result['Viral Pneumonia']}%</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink document={generateReport()} fileName="medical_report.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFReport;
