import MolecCaseStudies1 from '../Moleculas/molec_CaseStudies1'
import MolecGoodReviews1 from '../Moleculas/molec_GoodReviews1'
import MolecHappyUsers1 from '../Moleculas/molec_HappyUsers1'
import MolecIssuesSolved1 from '../Moleculas/molec_IssuesSolved1'
import MolecOrdersReceived1 from '../Moleculas/molec_OrdersReceived1'

import './counter1.css'

const Counter1 = () => {
    return (
        <div className='counter1'>
            <MolecHappyUsers1/>
            <MolecIssuesSolved1/>
            <MolecGoodReviews1/>
            <MolecCaseStudies1/>
            <MolecOrdersReceived1/>
        </div>
    )
}


export default Counter1