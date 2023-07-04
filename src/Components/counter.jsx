import MolecCaseStudies from '../Moleculas/molec_CaseStudies'
import MolecGoodReviews from '../Moleculas/molec_GoodReviews'
import MolecHappyUsers from '../Moleculas/molec_HappyUsers'
import MolecIssuesSolved from '../Moleculas/molec_IssuesSolved'
import MolecOrdersReceived from '../Moleculas/molec_ordersreceived'
import './counter.css'

const Counter = () => {
    return (
        <div className='counter'>
            <MolecHappyUsers/>
            <MolecIssuesSolved/>
            <MolecGoodReviews/>
            <MolecCaseStudies/>
            <MolecOrdersReceived/>
        </div>
    )
}


export default Counter