import { Link } from 'react-router-dom';

const PopUp = ({setState}) => {
  return (
    <div className="pop-up">
        <article>
            <h3>Well Done!</h3>
            <p>You have successfuly abind by providing valid inputs</p>
            <Link to="/login"><button>OK</button></Link>
            <p>PROCEED</p>
        </article>
    </div>
  )
}

export default PopUp