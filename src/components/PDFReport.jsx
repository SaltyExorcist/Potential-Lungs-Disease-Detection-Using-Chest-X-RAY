import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import "./styles.css";

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f5f5f5',
    padding: '2cm',
    fontFamily: 'Times-Roman',
  },
  section: {
    marginBottom: 10,
    marginTop: '1cm', // Adjust the top margin as per your requirement
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: '2cm', // Adjust the top margin as per your requirement
  },
  line: {
    borderBottomWidth: 2, // Increase the border width for a bolder line
    borderBottomColor: '#000000',
    marginTop: 20,
  },
  linefoot: {
    borderBottomWidth: 2, // Increase the border width for a bolder line
    borderBottomColor: '#000000',
    marginBottom: 50, // Increase the marginBottom to adjust the line position
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
  },
  tableCellHeader: {
    backgroundColor: '#FF7F50', // Add the desired color value
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    padding: 5,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#333333',
  },
  tableCell: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    padding: 5,
    flex: 1,
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#000000',
  },
  summery_text: {
    fontSize: 12,
    marginBottom: 95,
    color: '#000000',
  },
  serious: {
    color: '#ff0000',
  },
  mild: {
    color: '#FF8C00',
  },
  notDetected: {
    color: '#228B22',
  },
  logo: {
    position: 'absolute',
    top: '1mm',
    left: '.01cm',
    width: '2cm',
    height: '2cm',
    border: '1cm solid black',
    borderRadius: '20%',
  },
  footer: {
    position: 'absolute',
    bottom: '.5cm',
    left: '2cm',
    right: '2cm',
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#555555',
  },
});

const PDFReport = ({ result , name, age, height, weight}) => {
  const generateReport = () => {

    const calculateBMI = () => {
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeters * heightInMeters);
      return bmi.toFixed(2); // Return BMI value rounded to 2 decimal places
    };

    const getConditionText = (result) => {
      const conditions = [
        { label: 'Bacterial Pneumonia', percentage: result['Bacterial Pneumonia'], severity: '' },
        { label: 'Corona Virus Disease', percentage: result['Corona Virus Disease'], severity: '' },
        { label: 'Healthy', percentage: result['Normal'], severity: '' },
        { label: 'Tuberculosis', percentage: result['Tuberculosis'], severity: '' },
        { label: 'Viral Pneumonia', percentage: result['Viral Pneumonia'], severity: '' },
      ];

      conditions.forEach((condition) => {
        if (condition.label === 'Healthy') {
          if (condition.percentage > 50) {
            condition.severity = 'Healthy';
          } else {
            condition.severity = 'Not Healthy';
          }
        } else if (condition.percentage > 60) {
          condition.severity = 'Serious';
        } else if (condition.percentage > 30) {
          condition.severity = 'Mild';
        } else {
          condition.severity = 'Not detected';
        }
      });

      return conditions;
    };

    const getSeverityStyle = (severity) => {
      if (severity === 'Serious') {
        return styles.serious;
      } else if (severity === 'Mild') {
        return styles.mild;
      } else {
        return styles.notDetected;
      }
    };

    const getSummaryText = (result) => {
      const conditions = getConditionText(result);
      const summary = [];

      conditions.forEach((condition) => {
        if (condition.label === 'Healthy') {
          if (condition.percentage > 50) {
            summary.push('Overall, the individual is in a healthy condition.');
          } else {
            summary.push('Some health issues have been detected. Please consult a doctor for further evaluation.');
          }
        } else if (condition.percentage > 60) {
          summary.push(`The individual shows a high likelihood of ${condition.label}.`);
        } else if (condition.percentage > 30) {
          summary.push(`The individual shows a moderate likelihood of ${condition.label}.`);
        } else {
          summary.push(`No significant evidence of ${condition.label} has been found.`);
        }
      });
  
      return summary.join(' ');
    };
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image src="./src/components/logo.png" style={styles.logo} />
            <Text style={styles.heading}>Medical Report</Text>
            <View style={styles.line} />
            <View style={styles.section}>
            <Text style={styles.subheading}>User Information:</Text>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Age: {age}</Text>
            <Text style={styles.text}>Height: {height}</Text>
            <Text style={styles.text}>Weight: {weight}</Text>
            <Text style={styles.text}>BMI: {calculateBMI()}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheading}>Results:</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCellHeader}>Condition</Text>
                  <Text style={styles.tableCellHeader}>Percentage</Text>
                  <Text style={styles.tableCellHeader}>Severity</Text>
                </View>
                {getConditionText(result).map((condition, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{condition.label}</Text>
                    <Text style={styles.tableCell}>{condition.percentage}%</Text>
                    <Text style={[styles.tableCell, getSeverityStyle(condition.severity)]}>{condition.severity}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.subheading}>Summary:</Text>
              <Text style={styles.summery_text}>{getSummaryText(result)}</Text>
            </View>
            <View style={styles.linefoot} />

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                This is an AI-generated result. Please consult your doctor for future treatment.
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <div>
      <PDFDownloadLink document={generateReport()} fileName="medical_report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : <button className='cta'><span>Download PDF</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg></button>}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFReport;