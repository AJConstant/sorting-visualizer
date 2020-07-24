import store from '../store/store';
import { 
    setTrace, 
    setToSwap, 
    setCompared, 
    setRunning, 
    setInPlayback,
    setPivot } from '../store/actions';
import { sorting_animation_delays, array_sizes } from './algorithm-util';

const mapArraySizeToSpeed = (arraySize) => {
    const idx = array_sizes.indexOf(arraySize);
    return sorting_animation_delays[idx === -1? 2 : idx];
}

const runPlayback = (dispatch, arraySize) => {
    const speed = mapArraySizeToSpeed(arraySize);
    let playback = setInterval(() => {
        if(!store.getState().arrayState.running
            || store.getState().arrayState.trace.length === 0){
                clearInterval(playback);
            }
        playbackTrace(dispatch);
    }, speed)
};

const playbackTrace = (dispatch) => {
    let trace = store.getState().arrayState.trace.slice(0);
    
    // Peel off next action to dispatch
    let nextAction = trace.shift();
    if(nextAction){
        dispatch(setTrace(trace.slice(0)));
        dispatch(nextAction);
    } else {
        dispatch(setToSwap([]));
        dispatch(setCompared([]));
        dispatch(setPivot([]));
        dispatch(setRunning(false));
        dispatch(setInPlayback(false));
    }
    return;
}

export { runPlayback };