import React, { Fragment, useState } from 'react';
import { ScrollView, Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import SnackBar from 'react-native-snackbar'

const currencyPerRuppe = {
	DOLLAR: 0.012,
	EURO: 0.0099,
	POUND: 0.0086,
	RUBEL: 0.91,
	AUSDOLLAR: 0.015,
	CANDOLLAR: 0.015,
	YEN: 1.29,
	DINAR: 0.0036,
	BITCOIN: 0.000004
};

const App = () => {
	const [ inputValue, setInputValue ] = useState(0);
	const [ resultValue, setResultValue ] = useState(0);

  const buttonPressed = (currency) => {
    if(!inputValue) {
      return SnackBar.show({
        text: 'Please enter a value',
        backgroundColor: '#2ecc71',
        textColor: 'white'
      })
    }

    let result = parseFloat(inputValue) * currencyPerRuppe[currency];

    setResultValue(result.toFixed(2) + ' ' + currency);
  }

	return (
		<Fragment>
			<ScrollView
				backgroundColor="black"
				keyboardShouldPersistTaps="handled"
				contentInsetAdjustmentBehavior="automatic"
			>
				<SafeAreaView>
          <Text style={styles.title}>Currency Converter App</Text>
					<View style={styles.resultContainer}>
						<Text style={styles.resultValue}>{resultValue}</Text>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							keyboardType="numeric"
							placeholder="Enter a value in Taka"
							placeholderTextColor="white"
							value={inputValue}
							onChangeText={(inputValue) => setInputValue(inputValue)}
						/>
					</View>
					<View style={styles.converButtonConverter}>
						{Object.keys(currencyPerRuppe).map((currency) => (
							<TouchableOpacity onPress={() => buttonPressed(currency)} style={styles.converButton} key={currency}>
								<Text style={styles.converButtonText}>{currency}</Text>
							</TouchableOpacity>
            ))}
					</View>
				</SafeAreaView>
			</ScrollView>
		</Fragment>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
  title: {
    color: '#2ecc71',
    textAlign: 'center',
		marginTop: 40,
    fontSize: 20
  },
	resultContainer: {
		height: 70,
		marginTop: 20,
		justifyContent: 'center',
		borderColor: 'skyblue',
		borderWidth: 1,
		alignItems: 'center',
    borderRadius: 5,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
	},
	resultValue: {
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold'
	},
	inputContainer: {
		height: 70,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'skyblue',
    borderRadius: 5,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
	},
	input: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white'
	},
	converButtonConverter: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
    justifyContent: 'center',
	},
	converButton: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
		width: '28%',
		margin: 5,
		backgroundColor: '#34495e',
    borderRadius: 10
	},
	converButtonText: {
		color: 'white',
		fontSize: 15
	}
});
