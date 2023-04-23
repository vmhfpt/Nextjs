import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/reducers/profile'

export default function Redux(){
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(count);
    return (<div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>);
}