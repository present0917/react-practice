import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
function ExpenseItem(props) {
    const ClickHandler=()=>{
        console.log('clicked');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={ClickHandler}>button!</button>
        </Card>
    )

}
export default ExpenseItem;  