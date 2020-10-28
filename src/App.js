import './App.css';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './redux/actions';

function App({ plus, minus, countResult }) {
  return (
    <div className="App">
      <button onClick={plus}>+</button>
      &nbsp;{countResult}&nbsp;
      <button onClick={minus}>-</button>
    </div >
  );
}


const mapStateToProps = (state) => ({
  countResult: state.count
})

const mapDispatchToProps = {
  plus: incrementAction,
  minus: decrementAction
}


export default connect(mapStateToProps, mapDispatchToProps)(App)