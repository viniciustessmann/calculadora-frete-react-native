import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native"
import Result from "../Result/"

export default function Form(){
    const  [origin, setOrigin] = useState("9602036")
    const  [destiny, setDestiny] = useState("01018020")
    const  [height, setHeight] = useState("10")
    const  [width, setWidth] = useState("10")
    const  [lenght, setLenght] = useState("10")
    const  [weight, setweight] = useState("1")
    const [results, setResults] = useState([])

    function validate() {
        return (origin != null && destiny != null && height != null && width != null && lenght != null && weight != null) 
    }

    function calculate () {
        const params = {
            "from": {"postal_code": origin},
            "to": {"postal_code": destiny},
            "package": {
                "height": height,
                "width": width,
                "length": lenght,
                "weight": weight
            }
        };
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept':   'application/json',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg1Yjk2NjE1ZTYyMWQ0NTRlMjAxYmIxYmE4MzMwODcxZWE0NWI4OGU3YzA3ZWYyYmJlZGI4YTBmMDEwMjgxOGVmMDQ1YzlhN2JmMTY4MGVkIn0.eyJhdWQiOiI5NTYiLCJqdGkiOiI4NWI5NjYxNWU2MjFkNDU0ZTIwMWJiMWJhODMzMDg3MWVhNDViODhlN2MwN2VmMmJiZWRiOGEwZjAxMDI4MThlZjA0NWM5YTdiZjE2ODBlZCIsImlhdCI6MTY0OTI4ODg1NSwibmJmIjoxNjQ5Mjg4ODU1LCJleHAiOjE2ODA4MjQ4NTUsInN1YiI6ImM0M2IzMGM1LTNhZWItNGFiNi1hNDc5LTJiOWZlYmJjODA5OCIsInNjb3BlcyI6WyJjYXJ0LXJlYWQiLCJjYXJ0LXdyaXRlIiwiY29tcGFuaWVzLXJlYWQiLCJjb21wYW5pZXMtd3JpdGUiLCJjb3Vwb25zLXJlYWQiLCJjb3Vwb25zLXdyaXRlIiwibm90aWZpY2F0aW9ucy1yZWFkIiwib3JkZXJzLXJlYWQiLCJwcm9kdWN0cy1yZWFkIiwicHJvZHVjdHMtZGVzdHJveSIsInByb2R1Y3RzLXdyaXRlIiwicHVyY2hhc2VzLXJlYWQiLCJzaGlwcGluZy1jYWxjdWxhdGUiLCJzaGlwcGluZy1jYW5jZWwiLCJzaGlwcGluZy1jaGVja291dCIsInNoaXBwaW5nLWNvbXBhbmllcyIsInNoaXBwaW5nLWdlbmVyYXRlIiwic2hpcHBpbmctcHJldmlldyIsInNoaXBwaW5nLXByaW50Iiwic2hpcHBpbmctc2hhcmUiLCJzaGlwcGluZy10cmFja2luZyIsImVjb21tZXJjZS1zaGlwcGluZyIsInRyYW5zYWN0aW9ucy1yZWFkIiwidXNlcnMtcmVhZCIsInVzZXJzLXdyaXRlIiwid2ViaG9va3MtcmVhZCIsIndlYmhvb2tzLXdyaXRlIl19.VDOnTG0RzAUvcTiExKY8t00I-qxe_bGsUq-tOkCY_00SYFYdy6nCAnVcRP4jBZY-q-oF0fG2hq5cLe171BkoUpAE3zW2UtXUJIpbuXdM3JzOoT28wylok7weQ66yjAQ6NtCpIohhfzuj_GwZgxIk9nXsiQmMMmdtkgl78kQd6xdwtM_u_doRKUWqjV07h-R4k6Bg6sYfc2mML-1SIVV7ep1GxfB7nPsICfJfSJegmb8bvsfpdbiEMeildob59OL-khqrVdI36rtQY-MGFItJtIVix94MnJWg78bvT4eLE-30PhwyjqcS4QL3GjK8sDHdiSVap4PEnrloNAIhfQYX-QiTA7Ky3RcTtu_ZsMoEIaZ3UPHaC27ZuW-dUeLTebIMnpV6gjosJs03KqBotF4egXLBd9X4Jo0E5ozLac_AKRf4JgtRi2wJFzbhf-ahmHmLwrmTvNrEubpF4CPmSHiuc56JV8P5FxdkyB8uOGMx9SmmAp9fl6Iax4Vvfc1t6M67qoelRRl3HOoBNjszR-8b56N8c2h4IzycEoYULueXfmdgXEtZ7yUTxZhyJ8AReNvmOUliWjxMnFic-LWRPRQ01BYaZFAxoOxi-inYFqeSz2LVSqP5PXworYjFmngrrC5xeq26ijWyDnP_aDvTs9VpZMFLlrkaT5B19AETgfasu6M'
            },
            body: JSON.stringify(params)
        };

        fetch('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate', requestOptions)
            .then(response => {
                return response.text();
            })
            .then(data => setResults(JSON.parse(data)));
    }

    return(
      <View>
            <View>

                <Text>Origem</Text>
                <TextInput 
                onChangeText={setOrigin}
                placeholder="00000000"
                keyboardType="numeric"
                />

                <Text>Destino</Text>
                <TextInput 
                onChangeText={setDestiny}
                placeholder="00000000"
                keyboardType="numeric"
                />

                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeight}
                placeholder="ex: 10"
                keyboardType="numeric"
                />

                <Text>Largura</Text>
                <TextInput 
                onChangeText={setWidth}
                placeholder="ex: 10"
                keyboardType="numeric"
                />

                <Text>Comprimento</Text>
                <TextInput 
                onChangeText={setLenght}
                placeholder="ex: 10"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput 
                onChangeText={setweight}
                placeholder="ex: 10"
                keyboardType="numeric"
                />
            </View>
        
            <View>
                <Button title="Calcular" onPress={ () => calculate() } />
            </View>
            <View>
                <Result data={results} />
            </View>
      </View>
    );
}