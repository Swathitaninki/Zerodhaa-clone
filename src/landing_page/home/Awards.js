import React from 'react';
function Awards() {
    return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
            <img src='media/largestBroker.svg'/>
            </div>
            <div className='col-6 p-5 mt-3' >
                <h1>Largest Stock Broker </h1>
                <p2>2+ millions zerodha clients contribute to over 15%</p2>
             <div className='row mt-3'> 
                <div className='col-6'>
                    <ul>
                <li>
                    <p>Future and options </p>

                </li>
                <li>
                    <p>Commodity derivance </p>
                    
                </li>
                <li>
                    <p>Currency derivations</p>
                    
                </li>
            </ul>

                </div>
                <div className='col-6'>
                    <ul>
                <li>
                    <p>stocks </p>

                </li>
                <li>
                    <p>Mutual funds</p>
                    
                </li>
                <li>
                    <p>Bonds and Gov Security </p>
                    
                </li>
            </ul>
                </div>
             </div>
            
            <img src='/media/pressLogos.png' style={{width:"80%"}}/>
            
            </div>
            
        </div>
         </div>
    );
}

export default Awards;