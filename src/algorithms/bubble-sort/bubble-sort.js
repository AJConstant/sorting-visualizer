const bubbleSort = (array) => {
    const len = array.len;
    let updates = [];
    for(i=0; i < array.len -1; i++){
        for(j=0; j < len-i-1; j++){
            updates.push()
            if(array[j] > array[j+1]){
                // dispatch action updating should swap in state
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                // dispatch action updating array state
            }
            updateState();
        }
    }
    return array;
}

updateState = () => {
    console.log();
}