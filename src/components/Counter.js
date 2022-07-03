import { connect } from "react-redux/es/exports";
import {inc, dec, rnd} from "../actions";
import { useSelector, useDispatch } from "react-redux/es/exports";

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div className="jumbotron">
            <h1 id="counter">{counter}</h1>
            <button onClick={() => dispatch(dec())} id="dec" className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} id="inc" className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} id="rnd" className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;