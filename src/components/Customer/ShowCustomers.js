import React,{Fragment} from 'react'
 
function ShowCustomers(){
    return(
        <Fragment>
            <div className="container">
        <h1>GeeksforGeeks</h1>
        <b>Sticky header in table</b>
    <table className="table">
        <thead style={{position: 'sticky',top: 0}} className="thead-dark">
            <tr>
                <th className="header" scope="col">Course</th>
                <th className="header" scope="col">Start Date</th>
                <th className="header" scope="col">Fees</th>
                <th className="header" scope="col">Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>CAT</td>
                <td>1st Aug</td>
                <td>Free</td>
                <td>Online</td>
            </tr>
            <tr>
                <td>GATE</td>
                <td>5th July</td>
                <td>Free</td>
                <td>Online</td>
            </tr>
            <tr>
                <td>DSA</td>
                <td>1st July</td>
                <td>2499</td>
                <td>Online</td>
            </tr>
            <tr>
                <td>Java Backend</td>
                <td>28th March</td>
                <td>10999</td>
                <td>Offline</td>
            </tr>
            <tr>
                <td>SDE</td>
                <td>1st Sept</td>
                <td>299</td>
                <td>Online</td>
            </tr>
            <tr>
                <td>SUDO Placement</td>
                <td>20th Sept</td>
                <td>Free</td>
                <td>Online</td>
            </tr>
        </tbody>
    </table>
    </div>
 </Fragment>
    )
}

export default ShowCustomers