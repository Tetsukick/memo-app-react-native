import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
    render() {
        return (
            <View style={styles.memoList}>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモタイトル</Text>
                    <Text style={styles.memoDate}>2019/06/10</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモタイトル</Text>
                    <Text style={styles.memoDate}>2019/06/10</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモタイトル</Text>
                    <Text style={styles.memoDate}>2019/06/10</Text>
                </View>
                
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>メモタイトル</Text>
                    <Text style={styles.memoDate}>2019/06/10</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
      },
      memoListItem: {
        backgroundColor: '#fff',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
      },
      memoTitle: {
        fontSize: 18,
        marginBottom: 4
      },
});

export default MemoList;