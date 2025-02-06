import React from "react";
import { Appbar } from "react-native-paper";


const MyAppbar =({ navigation,back}) => (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress= {navigation.goBack}/> : null}
            <Appbar.Content title ="MDNav Demo"/>
                {!back ? (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('DetailsScreen')}/>
                ) : null}
        </Appbar.Header>
    
)

export default MyAppbar

